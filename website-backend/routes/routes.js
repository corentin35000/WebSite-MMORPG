const { app } = require('../server.js');

// Controllers
const forgotPasswordController = require('../controllers/forgotPasswordController.js');
const forgotPseudoController = require('../controllers/forgotPseudoController.js');
const passwordChangeController = require('../controllers/passwordChangeController.js');
const emailChangeController = require('../controllers/emailChangeController.js');
const pseudoChangeController = require('../controllers/pseudoChangeController.js');
const sendEmailToSupportController = require('../controllers/sendEmailToSupportController.js');
const statusServicesController = require('../controllers/statusServicesController.js');
const sendEmailAllController = require('../controllers/sendEmailAllController.js');
const connectionController = require('../controllers/connectionController.js');
const inscriptionController = require('../controllers/inscriptionController.js');
const connectionInGameController = require('../controllers/connectionInGameController.js');
const patchGameController = require('../controllers/patchGameController.js');
const getClassementsController = require('../controllers/getClassementsController.js');
const giveAccountUsersController = require('../controllers/giveAccountUsersController.js');
const changeServicesVersionController = require('../controllers/changeServicesVersionController.js');
const getServicesVersionController = require('../controllers/getServicesVersionController.js');

// Routes
const routes = {};

routes.forgotpassword = app.post('/forgot-password', async(req, res) => {
   await forgotPasswordController(req, res);
});

routes.forgotpseudo = app.post('/forgot-pseudo', async(req, res) => {
   await forgotPseudoController(req, res);
});

routes.passwordchange = app.post('/password-change', async(req, res) => {
   await passwordChangeController(req, res);
});

routes.emailchange = app.post('/email-change', async(req, res) => {
   await emailChangeController(req, res);
});

routes.pseudochange = app.post('/pseudo-change', async(req, res) => {
   await pseudoChangeController(req, res);
});

routes.statusservices = app.post('/status-services', async(req, res) => {
   await statusServicesController(req, res);
});

routes.sendemailall = app.get('/support/my-tickets', async(req, res) => {
   await sendEmailAllController(req, res);
});

routes.sendemailall = app.get('/support/my-tickets/:idticket', async(req, res) => {
   await sendEmailAllController(req, res);
});

routes.sendemailall = app.post('/support/my-tickets/:idticket/new-message', async(req, res) => {
   await sendEmailAllController(req, res);
});

routes.sendemailall = app.post('/support/my-tickets/new', async(req, res) => {
   await sendEmailAllController(req, res);
});

routes.sendemailtosupport = app.post('/support/send-email', async(req, res) => {
   await sendEmailToSupportController(req, res);
});

routes.sendemailall = app.post('/admin/send-email-all', async(req, res) => {
   await sendEmailAllController(req, res);
});

routes.changestatusservices = app.post('/admin/change-status-services', async(req, res) => {
   await statusServicesController(req, res);
});

routes.adminchat = app.post('/admin/chat', async(req, res) => {
   await statusServicesController(req, res);
});

routes.connection = app.post('/connection', async(req, res) => {
   await connectionController(req, res);
});

routes.inscription = app.post('/inscription', async(req, res) => {
   await inscriptionController(req, res);
});

routes.connection = app.post('/connection-ingame', async(req, res) => {
   await connectionInGameController(req, res);
});

routes.patchgame = app.get('/patchgame', async(req, res) => {
   await patchGameController(req, res);
});

routes.classements = app.get('/classements', async(req, res) => {
   await getClassementsController(req, res);
});

routes.giveaccount = app.post('/giveaccount', async(req, res) => {
   await giveAccountUsersController(req, res);
});

routes.changeservicesversion = app.post('/changeservicesversion', async(req, res) => {
   await changeServicesVersionController(req, res);
});

routes.getservicesversion = app.get('/getservicesversion', async(req, res) => {
   await getServicesVersionController(req, res);
});

module.exports = routes;