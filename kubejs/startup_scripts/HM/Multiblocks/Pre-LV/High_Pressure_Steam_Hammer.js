// packmode: hard

GTCEuStartupEvents.registry('gtceu:machine', event => {
	event.create('high_pressure_steam_hammer', 'multiblock')
		.rotationState(RotationState.NON_Y_AXIS)
		.recipeType('forge_hammer')
        .recipeModifier((machine, recipe) => $SteamMulti.recipeModifier(machine, recipe), true)
		.pattern(definition => FactoryBlockPattern.start()
            .aisle('AAA', 'AAA', 'AAA') 
            .aisle('AAA', 'A#A', 'AAA') 
            .aisle('AAA', 'A@A', 'AAA') 
            .where('A', Predicates.blocks('kubejs:high_steam_machine_casing')
                .or(Predicates.abilities(PartAbility.STEAM_IMPORT_ITEMS).setPreviewCount(1).setMaxGlobalLimited(2))
                .or(Predicates.abilities(PartAbility.STEAM).setExactLimit(1))
                .or(Predicates.abilities(PartAbility.STEAM_EXPORT_ITEMS).setPreviewCount(1).setMaxGlobalLimited(2)))
            .where('#', Predicates.blocks('minecraft:air'))
            .where('@', Predicates.controller(Predicates.blocks(definition.get())))
			.build())
		.workableCasingRenderer('kubejs:block/hm/high_steam_machine_casing', 'gtceu:block/machines/forge_hammer', false)
	
});