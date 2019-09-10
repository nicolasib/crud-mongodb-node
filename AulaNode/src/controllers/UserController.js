const User = require('../models/Users');

module.exports = {
    async store(req, res){
        const { username, password, email } = req.body;

        try{
            const addUser = await User.create({
                username,
                password,
                email
            });
            return res.status(200).json(addUser);

        }catch(error){
            res.status(400).json(error);
        }
    },

    async update(req, res){
        const { email, newUsername } = req.body;

        try{
            const updatedUser = await User.findOneAndUpdate({ email }, { username: newUsername }, { new: true });
            
            res.status(200).json(updatedUser);        
        }catch(error){
            res.status(400).json({ error: `Sua mãe é minha` });
        }
    },

    async delete(req, res){

        const { email } = req.body;

        try{
            const deletedUser = await User.findOneAndDelete({ email });

            res.status(200).json(deletedUser);
        }catch(error){
            res.status(400).json({ error : "AAAAAAAA eu vo gozaaaaaaaa" });
        }

    },

    async index(req, res){
        const { param } = req.body;

        if(param === 'all'){
            try{
                const content = await User.find();
                res.status(200).json(content);
            }catch(error){
                console.log('deu merda');
            }
        }else{
            try{
                const userExists = await User.findOne({username: param});
                
                if(userExists) return res.status(200).json(userExists);
                
                return res.status(400).json({ error: `User not exists!` });
            }catch(error){
                console.log('erro na consulta detalhada');
            }
        }

    }
}