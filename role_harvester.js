module.exports = {
    run(harvester) {
    if(harvester.store.getFreeCapacity()>0){
       if (harvester.harvest(harvester.room.find(FIND_SOURCES_ACTIVE)[0]) == ERR_NOT_IN_RANGE){
           harvester.moveTo(harvester.room.find(FIND_SOURCES_ACTIVE)[0].pos)
       }
    } else if (harvester.transfer(Game.spawns['Spawn1'], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
        harvester.moveTo(Game.spawns['Spawn1'].pos)
    }
    }
};
