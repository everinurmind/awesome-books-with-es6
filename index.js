import BookApp from './modules/bookApp.js';
import switchSections from './modules/switchSections.js';

const bookApp = new BookApp();
bookApp.displayBooks();

switchSections();
