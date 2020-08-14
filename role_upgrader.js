module.exports = {
    run(upgrader) {
       if(upgrader.store[RESOURCE_ENERGY] == 0){
           if (upgrader.harvest(upgrader.room.find(FIND_SOURCES_ACTIVE)[0]) == ERR_NOT_IN_RANGE){
               upgrader.moveTo(upgrader.room.find(FIND_SOURCES_ACTIVE)[0].pos)
           }
        } else if (upgrader.transfer(upgrader.room.controller, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
            upgrader.moveTo(upgrader.room.controller.pos)
        }
 
    }
}
