// packmode: hard

// Coarse Dirt Scavenging

BlockEvents.rightClicked('minecraft:coarse_dirt', event => {
	const { player, block, item, level } = event;

	const pop_up = (item, chance) => (Math.random() < chance) && block.popItemFromFace(item, 'up');

	const dig = () => {
		level.playSound(null, block.pos, "minecraft:block.composter.fill", "blocks");
		player.swing();
	}

	const damage_tool = (tool) => {
		if (tool.damageValue < tool.maxDamage) {
			tool.damageValue++
		} else {
			tool.count--
			level.playSound(null, block.pos, "minecraft:entity.item.break", "players");
		}
	}

	if (player.getMainHandItem() == null && player.getOffHandItem() == null && player.isCrouching()) {
		pop_up('kubejs:flint_shard', 0.25);
		pop_up('minecraft:cookie', 0.002);

		player.addExhaustion(.03)
		dig();
	};

	if (item.id == 'kubejs:basic_scavenging_rod') {
		pop_up('kubejs:flint_shard', 0.5);
		pop_up('minecraft:flint', 0.2);
		pop_up('minecraft:cookie', 0.003);

		damage_tool(item);
		dig();
	};

	if (item.id == 'kubejs:scavenging_rod') {
		pop_up('kubejs:flint_shard', 0.5);
		pop_up('minecraft:flint', 0.5);
		pop_up('exnihilosequentia:stone_pebble', 0.2);
		pop_up('minecraft:cookie', 0.004);

		damage_tool(item);
		dig();
	};


});

BlockEvents.rightClicked('minecraft:grass_block', event => {
	const { player, block, item, level } = event;

	const pop_up = (item, chance) => (Math.random() < chance) && block.popItemFromFace(item, 'up');

	const dig = () => {
		level.playSound(null, block.pos, "minecraft:block.composter.fill", "blocks");
		player.swing();
	}

	const damage_tool = (tool) => {
		if (tool.damageValue < tool.maxDamage) {
			tool.damageValue++
		} else {
			tool.count--
			level.playSound(null, block.pos, "minecraft:entity.item.break", "blocks");
		}
	}

	if (player.getMainHandItem() == null && player.getOffHandItem() == null && player.isCrouching()) {
		pop_up('exnihilosequentia:stone_pebble', 0.01);
		pop_up('exnihilosequentia:andesite_pebble', 0.05);
		pop_up('exnihilosequentia:basalt_pebble', 0.05);
		pop_up('exnihilosequentia:blackstone_pebble', 0.05);
		pop_up('exnihilosequentia:deepslate_pebble', 0.05);
		pop_up('exnihilosequentia:diorite_pebble', 0.05);
		pop_up('exnihilosequentia:granite_pebble', 0.05);
		pop_up('exnihilosequentia:tuff_pebble', 0.05);
		pop_up('exnihilosequentia:calcite_pebble', 0.05);
		pop_up('exnihilosequentia:dripstone_pebble', 0.05);
		pop_up('minecraft:cookie', 0.006);
		player.addExhaustion(.02)
		dig();
	};

	if (item.id == 'kubejs:basic_scavenging_rod') {
		pop_up('exnihilosequentia:stone_pebble', 0.03);
		pop_up('exnihilosequentia:andesite_pebble', 0.09);
		pop_up('exnihilosequentia:basalt_pebble', 0.09);
		pop_up('exnihilosequentia:blackstone_pebble', 0.09);
		pop_up('exnihilosequentia:deepslate_pebble', 0.09);
		pop_up('exnihilosequentia:diorite_pebble', 0.09);
		pop_up('exnihilosequentia:granite_pebble', 0.09);
		pop_up('exnihilosequentia:tuff_pebble', 0.09);
		pop_up('exnihilosequentia:calcite_pebble', 0.09);
		pop_up('exnihilosequentia:dripstone_pebble', 0.09);
		pop_up('minecraft:cookie', 0.008);

		damage_tool(item);
		dig();
	};

	if (item.id == 'kubejs:scavenging_rod') {
		pop_up('exnihilosequentia:stone_pebble', 0.05);
		pop_up('exnihilosequentia:andesite_pebble', 0.15);
		pop_up('exnihilosequentia:basalt_pebble', 0.15);
		pop_up('exnihilosequentia:blackstone_pebble', 0.15);
		pop_up('exnihilosequentia:deepslate_pebble', 0.15);
		pop_up('exnihilosequentia:diorite_pebble', 0.15);
		pop_up('exnihilosequentia:granite_pebble', 0.15);
		pop_up('exnihilosequentia:tuff_pebble', 0.15);
		pop_up('exnihilosequentia:calcite_pebble', 0.15);
		pop_up('exnihilosequentia:dripstone_pebble', 0.15);
		pop_up('minecraft:cookie', 0.01);

		damage_tool(item);
		dig();
	};
});

// In-world recipes for Crucible and Crafting Table

[
	{ hit: 'minecraft:stripped_jungle_log', tool: 'forge:tools/knives', get: 'kubejs:crucible_stage_1' },
	{ hit: 'kubejs:crucible_stage_1', tool: 'forge:tools/axes', get: 'kubejs:crucible_stage_2' },
	{ hit: 'kubejs:crucible_stage_2', tool: 'forge:tools/saws', get: 'kubejs:crucible_stage_3' },
	{ hit: 'kubejs:crucible_stage_3', tool: 'forge:tools/knives', get: 'exnihilosequentia:jungle_crucible' },
].forEach(crucible => {
	const { hit, tool, get } = crucible;

	BlockEvents.rightClicked(hit, event => {
		const { player, block, level } = event;

		if (!player.getMainHandItem().hasTag(tool)) return;
		if (player.getOffHandItem() !== null) return;

		block.set(get);
		player.addItem(Item.of('gtceu:wood_dust'));

		level.playSound(null, block.pos, "minecraft:block.wood.break", "blocks");
		player.swing();
	});
});

[
	{ hit: 'minecraft:jungle_log', tool: 'forge:tools/saws', get: 'kubejs:crafting_stage_1' },
	{ hit: 'kubejs:crafting_stage_1', tool: 'forge:tools/axes', get: 'kubejs:crafting_stage_2' },
	{ hit: 'kubejs:crafting_stage_2', tool: 'forge:tools/knives', get: 'kubejs:crafting_stage_3' },
].forEach(table => {
	const { hit, tool, get } = table;

	BlockEvents.rightClicked(hit, event => {
		const { player, block, level } = event;

		if (!player.getMainHandItem().hasTag(tool)) return;
		if (player.getOffHandItem() !== null) return;

		block.set(get);

		level.playSound(null, block.pos, "minecraft:block.wood.break", "blocks");
		player.swing();
	});
});

BlockEvents.rightClicked('kubejs:crafting_stage_3', event => {
	const { player, block, item, level } = event;

	if (item.id !== 'farmersdelight:canvas') return;

	block.set('minecraft:crafting_table');
	item.count--;

	level.playSound(null, block.pos, "minecraft:item.dye.use", "blocks");
	player.swing();
});

// Crafting Recipes

ServerEvents.recipes(event => {
	event.shaped(Item.of('minecraft:flint'), [
		'SS',
		'SS'
	], {
		S: 'kubejs:flint_shard'
	});

	event.remove({ id: 'minecraft:coarse_dirt' })
	event.shaped(Item.of('minecraft:coarse_dirt', 2), [
		'DF',
		'FD'
	], {
		F: 'minecraft:flint',
		D: 'minecraft:dirt'
	});

	event.recipes.create.mixing('3x minecraft:coarse_dirt', ['3x minecraft:dirt', '2x minecraft:flint']);
	event.recipes.create.mixing('3x minecraft:coarse_dirt', ['3x minecraft:dirt', '1x minecraft:gravel']);

	const stones = ['andesite', 'basalt', 'blackstone', 'deepslate', 'diorite', 'granite', 'tuff', 'calcite', 'dripstone']

	stones.forEach(stone => {
		event.shaped(Item.of(`exnihilosequentia:crushed_${stone}`), [
			'PP',
			'PP'
		], {
			P: `exnihilosequentia:${stone}_pebble`
		});
	});

	event.shaped(Item.of('minecraft:cobblestone'), [
		'PP',
		'PP'
	], {
		P: 'exnihilosequentia:stone_pebble'
	});

	event.recipes.gtceu.stone_barrel('stone_pebble')
		.circuit(0)
		.inputFluids('minecraft:lava 5', 'minecraft:water 245')
		.itemOutputs('exnihilosequentia:stone_pebble')
		.duration(5);

	event.recipes.gtceu.stone_barrel('obsidian')
		.circuit(10)
		.inputFluids('minecraft:lava 1000', 'minecraft:water 1000')
		.itemOutputs('minecraft:obsidian')
		.duration(600);

	const primitive_processing = [
		{ primary: 'hematite', secondary: 'magnetite', tertiary: 'nickel' },
		{ primary: 'chalcopyrite', secondary: 'pyrite', tertiary: 'gold' },
		{ primary: 'sphalerite', secondary: 'zinc', tertiary: 'gallium' },
		{ primary: 'cassiterite', secondary: 'tin', tertiary: 'bismuth' },
		{ primary: 'galena', secondary: 'sulfur', tertiary: 'silver' },
		{ primary: 'magnetite', secondary: 'gold', tertiary: 'iron' },
		{ primary: 'pyrite', secondary: 'sulfur', tertiary: 'tricalcium_phosphate' }
	]

	primitive_processing.forEach(material => {
		event.recipes.gtceu.primitive_ore_processing(`crushed_${material.primary}_ore`)
			.itemInputs(`gtceu:crushed_${material.primary}_ore`, '2x #minecraft:coals')
			.inputFluids('minecraft:water 1000')
			.itemOutputs(`gtceu:${material.primary}_dust`)
			.chancedOutput(`gtceu:${material.primary}_dust`, 5000, 0)
			.chancedOutput(`gtceu:${material.secondary}_dust`, 2500, 0)
			.chancedOutput(`gtceu:${material.tertiary}_dust`, 1250, 0)
			.duration(400);
	});

	event.recipes.gtceu.barrel('slitake')
		.notConsumable('thermal:slime_mushroom_spores')
		.inputFluids('exnihilosequentia:witch_water 200')
		.chancedOutput('thermal:slime_mushroom_spores', 7000, 0)
		.duration(240);

	event.recipes.gtceu.barrel_transformation('soul_sand')
		.itemInputs('minecraft:sand')
		.inputFluids('exnihilosequentia:witch_water 1000')
		.itemOutputs('minecraft:soul_sand')
		.duration(600);

	event.recipes.gtceu.barrel_transformation('witch_water')
		.chancedInput('exnihilosequentia:mycelium_spores', 5000, 0)
		.inputFluids('minecraft:water 1000')
		.outputFluids('exnihilosequentia:witch_water 1000')
		.duration(800);

	event.recipes.gtceu.barrel_composting('dirt')
		.itemInputs('4x #minecraft:leaves')
		.itemOutputs('1x minecraft:dirt')
		.duration(160);

	// Listed in other regions
	// const latexType = [{ fuel: 'minecraft:bone_meal', circ: '1' }, { fuel: 'thermal:compost', circ: '2' }, { fuel: 'gtceu:fertilizer', circ: '3' }]
	// latexType.forEach(latex => {
	// 	event.recipes.gtceu.latex_plantation(`latex_${latex.circ}`)
	// 		.chancedInput(`${latex.fuel}`, 2500, 0)
	// 		.notConsumable('gtceu:iron_screw')
	// 		.circuit(latex.circ)
	// 		.outputFluids(`thermal:latex ${100 + 50 * latex.circ}`)
	// 		.duration(160);
	// });
	// event.recipes.gtceu.latex_plantation(`latex`)
	// 	.notConsumable('gtceu:wood_screw')
	// 	.outputFluids(`thermal:latex 100`)
	// 	.duration(160);
});

// Jungle Wood Stripping (Bark + Resin)

BlockEvents.rightClicked('minecraft:jungle_log', event => {
	const { player, block, item, level } = event;

	if (!item.hasTag('minecraft:axes')) return;

	player.addItem(Item.of('farmersdelight:tree_bark'));
	if (Math.random() < 0.1) player.addItem(Item.of('gtceu:sticky_resin'));
});

// Dead Bush -> Jungle Sapling

BlockEvents.rightClicked('minecraft:dead_bush', event => {
	const { player, block, item, hand, level } = event;

	if (item.id !== 'kubejs:water_bowl') return;

	block.set('minecraft:jungle_sapling');
	player.setItemInHand(hand, Item.of('minecraft:bowl'));

	level.spawnParticles("minecraft:happy_villager", false, block.x + 0.5, block.y + 0.5, block.z + 0.5, 0.25, 0.25, 0.25, 10, 0.01);
	level.playSound(null, block.pos, "minecraft:item.bone_meal.use", "blocks");
	player.swing();
});

// Water Bowls

BlockEvents.rightClicked('exnihilosequentia:jungle_crucible', event => {
	const { player, block, item, hand, level } = event;
	const { FluidName: fluid, Amount: amount } = block.entityData.tank;

	if (item.id !== 'minecraft:bowl') return;
	if (fluid !== 'minecraft:water' || amount < 250) return;

	block.mergeEntityData({ tank: { FluidName: 'minecraft:water', Amount: amount - 250 } });

	if (item.count > 1) {
		player.give(Item.of('kubejs:water_bowl'));
		item.count--;
	} else {
		player.setItemInHand(hand, Item.of('kubejs:water_bowl'));
	}

	level.playSound(null, block.pos, "minecraft:item.bucket.fill", "blocks");
	player.swing();
});

BlockEvents.rightClicked('exnihilosequentia:jungle_crucible', event => {
	const { player, block, item, hand, level } = event;
	const { FluidName: fluid, Amount: amount } = block.entityData.tank;

	if (item.id !== 'kubejs:water_bowl') return;
	if (fluid !== 'minecraft:water' || amount > 3750) return;

	block.mergeEntityData({ tank: { FluidName: 'minecraft:water', Amount: amount + 250 } });
	player.setItemInHand(hand, Item.of('minecraft:bowl'));

	level.playSound(null, block.pos, "minecraft:item.bucket.empty", "blocks");
	player.swing();
});

// Mud and Clay In-world Recipes

BlockEvents.rightClicked('minecraft:dirt', event => {
	const { player, block, item, hand, level } = event;

	if (item.id !== 'kubejs:water_bowl') return;

	block.set('minecraft:mud');
	player.setItemInHand(hand, Item.of('minecraft:bowl'));

	level.playSound(null, block.pos, "minecraft:item.bucket.fill", "blocks");
	player.swing();
});

BlockEvents.rightClicked('exnihilosequentia:dust', event => {
	const { player, block, item, hand, level } = event;

	if (item.id !== 'kubejs:water_bowl') return;

	block.set('minecraft:clay');
	player.setItemInHand(hand, Item.of('minecraft:bowl'));

	level.playSound(null, block.pos, "minecraft:item.bucket.fill", "blocks");
	player.swing();
});