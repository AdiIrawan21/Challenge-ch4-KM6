const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

module.exports = {
    // function untuk create data users
    create: async (req, res, next) => {
        try {
            let { name, email, password, identity_type, identity_number, address } = req.body;

            //cek apakah email sudah terdaftar
            let exist = await prisma.user.findFirst({
                where: {
                    email
                }
            })

            if (exist) {
                return res.status(400).json({
                    status: false,
                    message: 'email already use',
                })
            }

            // validasi data jika tidak diisi
            if (!name || !email || !password || !identity_type || !identity_number || !address) {
                return res.status(400).json({
                    status: false,
                    message: `'field name', 'email', 'password', 'identity_type', 'address' are required`,
                    data: null
                })
            }

            // create data beserta profile
            let users = await prisma.user.create({
                data: {
                    name,
                    email,
                    password,
                    profile: {
                        create: {
                            identity_type,
                            identity_number,
                            address
                        }
                    }
                },
                include: {
                    profile: true,
                }
            })

            res.status(201).json({
                status: true,
                message: 'Users Successfully Created',
                data: users
            })
        } catch (err) {
            next(err)
        }
    },

    // function untuk menampilkan data users
    index: async (req, res, next) => {
        try {
            let users = await prisma.user.findMany();

            // cek apakah users ada/tidak
            if (!users) {
                return res.status(404).json({
                    status: false,
                    message: 'No users found',
                    data: []
                });
            }

            res.status(200).json({
                status: true,
                message: 'OK',
                data: users
            })
        } catch (err) {
            next(err);
        }
    },

    // function untuk menampilkan detail users by id beserta dengan profile
    show: async (req, res, next) => {
        try {

            let id = req.params.id;

            // cek id users 
            let existingUsers = await prisma.user.findUnique({
                where: {
                    id: parseInt(id)
                },
            });

            if (!existingUsers) {
                return res.status(404).json({
                    status: false,
                    message: "Users not found",
                    data: null
                });
            }

            let users = await prisma.user.findUnique({
                where: {
                    id: parseInt(id)
                },
                include: {
                    profile: true
                }
            });

            res.status(200).json({
                status: true,
                message: 'OK',
                data: users,
            })

        } catch (err) {
            next(err);
        }
    },

    // function untuk update data users
    edit: async (req, res, next) => {
        try {
            let id = req.params.id;
            let { name, email, password, identity_type, identity_number, address } = req.body;

            // cek id users
            let existingUsers = await prisma.user.findUnique({
                where: {
                    id: parseInt(id)
                },
            });

            if (!existingUsers) {
                return res.status(404).json({
                    status: false,
                    message: "Users not found",
                    data: null
                });
            }

            // validasi untuk update data
            if (!name || !email || !password || !identity_type || !identity_number || !address) {
                return res.status(400).json({
                    status: false,
                    message: `'field name', 'email', 'password', 'identity_type', 'address' are required`,
                    data: null
                })
            }

            // update data
            let updateUsers = await prisma.user.update({
                where: {
                    id: parseInt(id)
                },

                data: {
                    name,
                    email,
                    password,
                    profile: {
                        update: {
                            identity_type,
                            identity_number,
                            address
                        }
                    }
                },
                include: {
                    profile: true,
                }
            })

            res.status(200).json({
                status: true,
                message: 'Update Data Successfully',
                data: updateUsers
            })

        } catch (err) {
            next(err);
        }
    }
}