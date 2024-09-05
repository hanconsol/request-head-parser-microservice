
const whoAmI =   (req, res) => {
    const lang = req.get('accept-language');
    const softW = req.get('accept-encoding');
    console.log(req.headers);

      res.json({ ipaddress: req.ip, language: lang, software: softW});
       
       }

const hello =  (req, res) => {
      res.json({ greeting: 'hello API' });
        req
        }

module.exports = {
    whoAmI,
    hello
}
