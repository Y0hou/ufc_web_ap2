const AlunoModel = require("../models/AlunoModel")

class AlunoService {

    static async mostrarPorId(id) {
        try {
            const user = await AlunoModel.findById(id)
            return user
        } catch (error) {
            console.log(error)
            return error
        }
    }

    static async listar(query = {}) {
        try {
            const users = await AlunoModel.find(query)
            return users
        } catch (error) {
            console.log(error)
            return error
        }
    }

    static async criar(data) {
        try {
            let novoAluno = new AlunoModel(data)
            await novoAluno.save()

            console.log(novoAluno)
            return novoAluno
        } catch (error) {
            console.log(error)
            return error
        }
    }

    static async atualizar(id, data) {
        try {
            let novoAluno = await AlunoModel.findByIdAndUpdate(id, data)
            return novoAluno
        } catch (error) {
            console.log(error)
            return error
        }
    }

    static async deletar(id) {
        try {
            let novoAluno = await AlunoModel.findByIdAndDelete(id)
            return novoAluno
        } catch (error) {
            console.log(error)
            return error
        }
    }

}

module.exports = AlunoService