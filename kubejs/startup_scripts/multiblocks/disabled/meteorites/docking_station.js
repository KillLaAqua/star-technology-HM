// GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
//     event.create('docking_station')
//         .category('docking_station')
//         .setMaxIOSize(2, 3, 1, 0)
//         .setSound(GTSoundEntries.MACERATOR);
// });

// GTCEuStartupEvents.registry('gtceu:machine', event => {
//     event.create('docking_station', 'multiblock')
//         .rotationState(RotationState.NON_Y_AXIS)
//         .recipeType('docking_station')
//         .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH])
//         .appearanceBlock(GTBlocks.CASING_TUNGSTENSTEEL_ROBUST)
//         .pattern(definition => FactoryBlockPattern.start()
//             .aisle('A#####A#A#####A', 'A#####A#A#####A', 'A#####A#A#####A', 'A#####A#A#####A', 'AAAAAAAAAAAAAAA', '###############', '###############') 
//             .aisle('######BBB######', '######CCC######', '######BBB######', '###############', 'ADDDDDDEDDDDDDA', '###############', '###############') 
//             .aisle('######BBB######', '#####FFGFF#####', '###FF#BHB#FF###', '#FF####I####FF#', 'ADJDDJDEDJDDJDA', '###############', '###############') 
//             .aisle('######BBB######', '######CGC######', '######BBB######', '###############', 'ADJDDJDEDJDDJDA', '#######E#######', '#######K#######') 
//             .aisle('######BBB######', '#####FFGFF#####', '###FF#BHB#FF###', '#FF####H####FF#', 'ADJJJJDHDJJJJDA', '#######H#######', '#######K#######') 
//             .aisle('######BBB######', '######CGC######', '######BBB######', '###############', 'ADJDDJDEDJDDJDA', '#######E#######', '#######K#######') 
//             .aisle('######BBB######', '#####FFGFF#####', '###FF#BHB#FF###', '#FF####I####FF#', 'ADJDDJDEDJDDJDA', '###############', '###############') 
//             .aisle('######BZB######', '######CCC######', '######BBB######', '###############', 'ADDDDDDEDDDDDDA', '###############', '###############') 
//             .aisle('A#####A#A#####A', 'A#####A#A#####A', 'A#####A#A#####A', 'A#####A#A#####A', 'AAAAAAAAAAAAAAA', '###############', '###############') 
//             .where('Z', Predicates.controller(Predicates.blocks(definition.get())))
//             .where('A', Predicates.blocks('gtceu:tungsten_carbide_frame'))
//             .where('B', Predicates.blocks('gtceu:robust_machine_casing')
//                 .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setMaxGlobalLimited(1))
//                 .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setMaxGlobalLimited(1))
//                 .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setMaxGlobalLimited(2))
//                 .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS).setMaxGlobalLimited(2))
//                 .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
//                 .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(2))
//                 .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1)))
//             .where('C', Predicates.blocks('gtceu:tungstensteel_firebox_casing'))
//             .where('D', Predicates.blocks('minecraft:black_concrete'))
//             .where('E', Predicates.blocks('gtceu:sturdy_machine_casing'))
//             .where('F', Predicates.blocks('gtceu:naquadah_alloy_frame'))
//             .where('G', Predicates.blocks('gtceu:tungstensteel_gearbox'))
//             .where('H', Predicates.blocks('gtceu:tungstensteel_pipe_casing'))
//             .where('I', Predicates.blocks('gtceu:extreme_engine_intake_casing'))
//             .where('J', Predicates.blocks('minecraft:white_concrete'))
//             .where('K', Predicates.blocks('architects_palette:hazard_slab'))
//             .where('#', Predicates.any())
//             .build())
//         .workableCasingRenderer('gtceu:block/casings/solid/machine_casing_robust_tungstensteel',
//         'gtceu:block/multiblock/implosion_compressor', false);
// });