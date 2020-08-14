module.exports.loop = function () {
    
    var harvester_count = 0;
    var upgrader_count = 0;
    
    for(var i = 0; i < Game.creeps.length; ++i){
        if(Game.creeps[i].includes("Harvester")) {
            harvester_count++
            Game.creeps[i].memory.role = "Harvester"
        } else if (Game.creeps[i].includes("Upgrader")) {
            upgrader_count++
        }
    }

    if (harvester_count < Memory.target_harvesters) {
        var harvester_name = "Harvester" + harvester_count
        Game.spawns['Spawn1'].spawnCreep([WORK, MOVE, CARRY], harvester_name)
    }
    
    var harvester = Game.creeps['Harvester0']

    if (harvester.harvest(harvester.room.find(FIND_SOURCES_ACTIVE)[0]) == ERR){
        harvester.moveTo(harvester.room.find(FIND_SOURCES_ACTIVE)[0].loc)
    }    
    
}
