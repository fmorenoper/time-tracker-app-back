import logger from '../utils/logger.js';
import mockData from '../fake-data.js'
const dbMock = [];

export const db = {
    init: function() {
        logger.info('...... mock db init ......');
        mockData.forEach((elem) => dbMock.push(elem));
        logger.info('...... mock db loaded ......');
    },
    insert: function(obj) {
        if(obj) {
            dbMock.push(obj);
            logger.debug('db:insert');
            logger.debug(obj);
        }
    },
    delete: function(obj) {
        if(obj) {
            const index = dbMock.findIndex((elem) => {
                const key = Object.keys(obj)[0];
                const value = Object.values(obj)[0];
                return elem[key] === value;
            });
            dbMock.splice(index, 1);
            logger.debug('db:delete');
        }
    },
    get: function(obj) {
        if(obj) {
            return dbMock.filter((elem) => {
                const key = Object.keys(obj)[0];
                const value = Object.values(obj)[0];
                logger.debug('db:get')
                return elem[key] === value;
            });
        }
        return dbMock;
    }
}