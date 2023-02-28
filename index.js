import BookApp from './modules/bookApp.js';
import switchSections from './modules/switchSections.js';
import { DateTime } from './modules/luxon.js';

const bookApp = new BookApp();
bookApp.displayBooks();

switchSections();

const dateTimeElement = document.getElementById('date-time');
dateTimeElement.innerHTML = DateTime.now().toLocaleString(DateTime.DATETIME_FULL_WITH_SECONDS);
