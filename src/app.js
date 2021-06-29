function alertWebhook(req, res, settings, triggerControllers) {
    try {
        const body = req.body;
        triggerControllers.forEach(trigger => {
            trigger.execute(`Epsagon Alert - ${trigger.name}`, body);
        });
        res.status(200).send("OK");
      }
    catch (err){
        res.status(422).send(err.message);
    }
}

module.exports = {
    ALERT_WEBHOOK: alertWebhook
}
