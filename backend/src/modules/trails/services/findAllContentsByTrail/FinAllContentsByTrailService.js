const ErrorApp = require('../../../../shared/Errors/Error');

class FinAllContentsByTrailService {
    constructor (trailRepository){
        this.trailRepository = trailRepository
    }
    
    async execute({ id, user }) {
        //LOGICA PARA DADOS FALTANDO
        if(!id){
            throw new ErrorApp('ID trail is missing')
        }

        await this.trailRepository.findTrailById(id)
    
        const contentsAvailableByTrail = await this.trailRepository.findContentByTrail(id)

        if( contentsAvailableByTrail.length === 0 ) {
            throw new ErrorApp("There is no content registered for this trail")
        }

        const contentsAvailable = await this.trailRepository.findContentByTrailAndUser(id, user)

        return contentsAvailable

    }
}

module.exports = FinAllContentsByTrailService