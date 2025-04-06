// packmode: hard

GTCEuStartupEvents.registry('gtceu:recipe_type', event => {

    event.create('primitive_sifter')
        .category('primitive_sifter')
        .setEUIO('in')
        .setMaxIOSize(2, 4, 0, 0)
        .setSound(GTSoundEntries.CENTRIFUGE);

});

GTCEuStartupEvents.registry('gtceu:machine', event => {
	event.create('high_pressure_steam_sifter', 'multiblock')
		.rotationState(RotationState.NON_Y_AXIS)
		.recipeType('primitive_sifter')
        .appearanceBlock(() => Block.getBlock('kubejs:high_steam_machine_casing'))
        .recipeModifier((machine, recipe) => $SteamMulti.recipeModifier(machine, recipe), true)
		.pattern(definition => FactoryBlockPattern.start()
            .aisle("ABBBA", "ACCCA", "ACCCA", "#AAA#") 
            .aisle("BCCCB", "CDDDC", "C###C", "A#A#A") 
            .aisle("BCCCB", "CDDDC", "C###C", "AAAAA") 
            .aisle("BCCCB", "CDDDC", "C###C", "A#A#A") 
            .aisle("ABBBA", "AC@CA", "ACCCA", "#AAA#") 
            .where("A", Predicates.blocks("gtceu:cast_iron_frame"))
            .where("B", Predicates.blocks("gtceu:steel_machine_casing"))
            .where("C", Predicates.blocks("kubejs:high_steam_machine_casing"))
            .where("#", Predicates.any())
            .where("D", Predicates.blocks("kubejs:meshblock"))
            .where("@", Predicates.controller(Predicates.blocks(definition.get())))
			.build())
		.workableCasingRenderer('kubejs:block/hm/high_steam_machine_casing', 'gtceu:block/machines/sifter', false)
	
});