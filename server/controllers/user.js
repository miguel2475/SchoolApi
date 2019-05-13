
export let get = async (request, response) => {
   const users = await global.db.user.findAll({
      include:[{
         model: global.db.person,
         as: 'person'
      }]
   })
   response.status(200).json(users)
}