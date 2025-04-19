
GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('classic_stargate_display', 'multiblock')
        .recipeType('dummy')
		.pattern(definition => FactoryBlockPattern.start()
            .aisle('   E  ','       ','       ','       ','       ','       ','       ')
            .aisle('   D   ','       ','       ','       ','       ','       ','       ')
            .aisle('       ','       ','       ','       ','       ','       ','       ') 	
    		.aisle(' RCBCR ','CR   RC','R     R','R  @  R','C     C','RR   RR',' CRCRC ')
			.where('R', Predicates.blocks('sgjourney:classic_stargate_ring_block'))
            .where('C', Predicates.blocks('sgjourney:classic_stargate_chevron_block'))
			.where('B', Predicates.blocks('sgjourney:classic_stargate_base_block')/*, Direction.SOUTH*/)
            .where('E', Predicates.blocks('sgjourney:crystal_interface')/*, Direction.SOUTH*/)
            .where('D', Predicates.blocks('sgjourney:classic_dhd'))
            .where('@', Predicates.controller(Predicates.blocks(definition.get())))	
			.build())
        .workableCasingRenderer('minecraft:block/smooth_stone', 'gtceu:block/machines/object_holder', false);
});