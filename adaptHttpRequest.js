function httpRequestAdaptor(controller) {
    
    return (req,res)=>{
        const httpRequest = {
            body: req.body,
            query: req.query,
            params: req.params,
            ip: req.ip,
            method: req.method,
            path: req.path,
            headers: {
              'Content-Type': req.get('Content-Type'),
              Referer: req.get('referer'),
              'User-Agent': req.get('User-Agent')
            }
          }

          controller(httpRequest)
          .then(result=>{
           res.json(result);
          }).catch(err=>{
            console.log(err);
            res.status(500).send({ error: 'An unkown error occurred.' });
          });
    }
}

module.exports=httpRequestAdaptor;