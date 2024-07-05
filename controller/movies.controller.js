import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();


export const movieIndex = async (req, res) => {
    try{

        const movies = await prisma.movies.findMany();

        res.status(200).json({
            message: "Movies fetch successfully",
            data: movies,
        })

    }catch(error){
        res.status(500).json({
            message: "An error occurred while fetching the movies.",
            error: error.message,
        })
    } finally {
        await prisma.$disconnect();
    }
}

export const movieCreate = async (req, res) => {
    // title, description

    const {title, description} = req.body;

    try {
    
        //create a movie

        const newMovie = await prisma.movies.create({
            data:{
                title: title,
                description: description
            },
        });

        res.status(201).json({
            message: "Movie created successfully",
            data: newMovie,
        });

    }catch(error){
        res.status(500).json({
            message: "An error occurred while creating the movie.",
            error: error.message,
        })
    } finally {
        await prisma.$disconnect();
    }

}

export const movieUpdate = async (req, res) => {
    const {id} = req.params;
    const {title, description} = req.body;

    try{
        // update the movie

        const updateMovie = await prisma.movies.update({
            where:{
                id: parseInt(id),
            },
            data:{
                title,
                description,
            }
        });

        res.status(200).json({
            message: "Movie updated successfully",
            data: updateMovie,
        })

    }catch(error){

        res.status(500).json({
            message: "An error occurred while updating the movie.",
            error: error.message,
        })

    } finally {
        await prisma.$disconnect();
    }

}

export const movieDelete = async (req, res) => {
    const {id} = req.params;

    try{

        const deleteMovie = await prisma.movies.delete({
            where: {
                id: parseInt(id),
            }
        })

        res.status(200).json({
            message: "Movie deleted successfully",
            data: deleteMovie,
        });

    }catch(error){
        res.status(500).json({
            message: "An error occurred while deleting the movie.",
            error: error.message,
        });
    } finally {
        await prisma.$disconnect()
    }

}

export const getMovieByID = async (req, res) => {
    const {id} = req.params;

    try{

        const getMovie = await prisma.movies.findUnique({
            where: {
                id: parseInt(id),
            }
        })

        if (getMovie) {
            // Send a success response
            res.status(200).json({
                message: 'Movie fetched successfully!',
                data: getMovie,
            });
        } else {
            // Send a not found response
            res.status(404).json({
                message: 'Movie not found.',
            });
        }

    }catch(error){
        res.status(500).json({
            message: "An error occurred while fetching movie.",
            error: error.message,
        });
    } finally {
        await prisma.$disconnect()
    }

}