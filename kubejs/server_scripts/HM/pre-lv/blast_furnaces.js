// packmode: hard

ServerEvents.recipes(event => {

    event.replaceInput({ id: 'minecraft:blast_furnace' }, 'minecraft:iron_ingot', 'gtceu:iron_plate');
	event.replaceInput({ id: 'minecraft:blast_furnace' }, 'minecraft:smooth_stone', 'kubejs:reinforced_stone_bricks');
    event.remove({id: 'gtceu:shapeless/potin_dust'});
    const noSmeltDustToIngot = (output) => {
        event.remove({id: `gtceu:smelting/smelt_dust_${output}_to_ingot`});

    }
    noSmeltDustToIngot('potin');
    noSmeltDustToIngot('red_alloy');
    noSmeltDustToIngot('tin_alloy');

    const CreateMixing = (output,inputs,heat) => {
        event.recipes.create.mixing(output, inputs).heatRequirement(`${heat}`);
    }
    CreateMixing('2x gtceu:pig_iron_dust', ['2x gtceu:iron_dust', 'gtceu:charcoal_dust'], 'lowheated');
    CreateMixing(Fluid.of('gtceu:cast_iron', 288), ['2x gtceu:crude_cast_iron_dust', 'gtceu:tiny_bismuth_dust', '2x gtceu:tiny_copper_dust'], 'superheated');
    CreateMixing('9x gtceu:potin_dust', ['6x gtceu:copper_dust','2x gtceu:tin_dust', 'gtceu:lead_dust'], 'lowheated');
    CreateMixing('2x gtceu:tin_alloy_dust', ['gtceu:iron_dust','gtceu:tin_dust'], 'lowheated');
    CreateMixing(Fluid.of('gtceu:crude_wrought_iron', 288), ['2x gtceu:pig_iron_ingot', 'gtceu:charcoal_dust'], 'superheated');
    CreateMixing(Fluid.of('gtceu:red_alloy', 720), ['gtceu:copper_dust', '4x minecraft:redstone'], 'superheated');

    ['brass', 'bronze', 'pig_iron', 'tin_alloy'].forEach(dust => {
		event
			.blasting(`gtceu:${dust}_ingot`, `gtceu:${dust}_dust`)
			.id(`kubejs:${dust}_dust_blasting_manual_only`);
	});

    event.remove({output: 'gtceu:primitive_blast_furnace'});
    event.recipes.create.mechanical_crafting('gtceu:primitive_blast_furnace', [
		'BPB',
		'RFR',
		'SBS'
	], {
		R: 'gtceu:iron_rod',
		S: 'gtceu:iron_screw',
		P: 'gtceu:iron_plate',
		B: 'gtceu:firebricks',
		F: 'minecraft:blast_furnace'
	});

    event.recipes.gtceu.assembler('reinforced_blast_furnace')
        .itemInputs('gtceu:primitive_blast_furnace', '4x dustrial_decor:cinder_bricks', '6x gtceu:double_wrought_iron_plate', 
            '2x gtceu:cast_iron_gear', 'createlowheated:basic_burner', '8x gtceu:wrought_iron_screw')
        .inputFluids('gtceu:concrete 3000')
        .itemOutputs('gtceu:reinforced_blast_furnace')
        .duration(300)
        .EUt(6);

    event.recipes.gtceu.assembler('solid_blast_furnace')
        .itemInputs('gtceu:rugged_alloyer', '2x gtceu:double_steel_plate', '2x gtceu:steel_gear', 
            '2x #gtceu:circuits/ulv' ,'kubejs:ulv_conveyor_module', 'kubejs:ulv_robot_arm')
        .inputFluids('gtceu:tin_alloy 432')
        .itemOutputs('gtceu:solid_blast_furnace')
        .duration(300)
        .EUt(7);

    event.recipes.gtceu.assembler('bessemer_forgery')
        .itemInputs('gtceu:solid_machine_casing','4x gtceu:long_steel_rod','4x #gtceu:circuits/lv','create:basin','2x gtceu:potin_gear',
            '4x gtceu:small_steel_gear','4x kubejs:ulv_robot_arm','2x kubejs:ulv_conveyor_module','2x kubejs:ulv_electric_pump')
        .inputFluids('gtceu:tin_alloy 1152')
        .itemOutputs('gtceu:bessemer_forgery')
        .duration(400)
        .EUt(8);

    event.remove({type: 'gtceu:primitive_blast_furnace'});
    
    const PrimBlasting = (input,output,Duration,FuelID,FuelType,ashType,FuelIDBlock,FuelTypeBlock,inputType) => {
        if(inputType == 'dust')
        event.recipes.gtceu.primitive_blast_furnace(`${output}_${FuelType}`)
            .itemInputs(input+'_dust',`${FuelID}:${FuelType}`)
            .itemOutputs(output+'_ingot',`gtceu:tiny_${ashType}ash_dust`)
            .duration(Duration);
        else        
        event.recipes.gtceu.primitive_blast_furnace(`${output}_${FuelType}`)
            .itemInputs(input+'_ingot',`${FuelID}:${FuelType}`)
            .itemOutputs(output+'_ingot',`gtceu:tiny_${ashType}ash_dust`)
            .duration(Duration);
        if(inputType == 'ingot')
        event.recipes.gtceu.primitive_blast_furnace(`${output}_block_${FuelTypeBlock}`)
            .itemInputs(input+'_block',`${FuelIDBlock}:${FuelTypeBlock}`)
            .itemOutputs(output+'_block',`gtceu:${ashType}ash_dust`)
            .duration(9 * Duration);
    }    
    PrimBlasting('gtceu:pig_iron','gtceu:crude_cast_iron',400,'#minecraft','coals','','#gtceu','coal_blocks','ingot');
    PrimBlasting('gtceu:pig_iron','gtceu:wrought_iron',480,'gtceu','coke_gem','dark_','gtceu','coke_block','ingot');
    PrimBlasting('gtceu:crude_wrought_iron','gtceu:wrought_iron',600,'#minecraft','coals','','#gtceu','coal_blocks','ingot');
    PrimBlasting('gtceu:potin','gtceu:potin',240,'#minecraft','coals','','#gtceu','coal_blocks','dust');
    PrimBlasting('gtceu:potin','gtceu:potin',160,'gtceu','coke_gem','dark_','gtceu','coke_block','dust');

    const CoalType = (id,type,ash,blockID,blockType,DurationMultiplier,amount) => {
    event.recipes.gtceu.reinforced_blast_furnace(`steel_ingot_${type}`)
        .itemInputs('gtceu:wrought_iron_ingot', `${amount}x ${id}:${type}`)
        .itemOutputs('gtceu:steel_ingot', `${amount}x gtceu:tiny_${ash}ash_dust`)
        .duration(600 * DurationMultiplier);
    event.recipes.gtceu.reinforced_blast_furnace(`steel_block_${blockType}`)
        .itemInputs('gtceu:wrought_iron_block', `${amount}x ${blockID}:${blockType}`)
        .itemOutputs('gtceu:steel_block', `${amount}x gtceu:${ash}ash_dust`)
        .duration(9 * 600 * DurationMultiplier);
    event.recipes.gtceu.primitive_blast_furnace(`steel_ingot_${type}`)
        .itemInputs('minecraft:glass', `${amount}x ${id}:${type}`)
        .itemOutputs('gtceu:tempered_glass', `${amount}x gtceu:tiny_${ash}ash_dust`)
        .duration(400 * DurationMultiplier);
    }
    CoalType('#minecraft','coals','','#gtceu','coal_blocks',1.25,2);
    CoalType('gtceu','coke_gem','dark_','gtceu','coke_block',1,1);

    event.recipes.gtceu.electric_blast_furnace('potin')
        .itemInputs('gtceu:potin_dust')
        .itemOutputs('gtceu:potin_ingot')
        .duration(160)
        .blastFurnaceTemp(1000)
        .EUt(100);
    
    event.remove({type: 'gtceu:electric_blast_furnace',output: 'gtceu:steel_ingot'});
    [{type:'iron',eut:100,id:'minecraft'},{type:'wrought_iron',eut:30,id:'gtceu'}].forEach(ferrite=>{
    
        event.recipes.gtceu.bessemer_forge(`bulk_steel_from_${ferrite.type}_boosted`)
            .itemInputs(`${ferrite.id}:${ferrite.type}_block`)
            .outputFluids('gtceu:steel 1296')
            .duration(8.5 * 1200)
            .EUt(ferrite.eut);

        [{type:'coal',id:'#gtceu:coal_dusts',multi:.9},{type:'coke',id:'#forge:dusts/coke',multi:.8},{type:'non',id:'',multi:1}].forEach(coal=>{
        event.recipes.gtceu.bessemer_forge(`steel_from_${ferrite.type}_${coal.type}_boosted`)
            .itemInputs(`#forge:ingots/${ferrite.type}`,`${coal.id}`)
            .outputFluids('gtceu:steel 144')
            .duration(1200 * coal.multi)
            .EUt(ferrite.eut);
        })
    });
    
    const burnable = (amount,BurnID,typeBurnable,duraChange,ash) => {
    const SolidBlast = (mainOutput,outputSolid,inputSolid,dura) => {
        event.recipes.gtceu.solid_blast_furnace(`${mainOutput}_${typeBurnable}`)
            .itemInputs(inputSolid[0],inputSolid[1],`${amount}x ${BurnID}:${typeBurnable}`)
            .itemOutputs(outputSolid[0],outputSolid[1],`${amount}x gtceu:tiny_${ash}ash_dust`)
            .duration(dura * duraChange);
    }
    SolidBlast('andesite_alloy',['10x create:andesite_alloy','gtceu:sulfur_dust'],['2x minecraft:andesite','2x gtceu:sphalerite_dust'],400);
    SolidBlast('rose_quartz-ite',['1x create:rose_quartz','gtceu:tiny_quartz_sand_dust'],['gtceu:quartzite_gem','10x minecraft:redstone'],400);
    SolidBlast('rose_quartz',['1x create:rose_quartz','gtceu:tiny_quartz_sand_dust'],['minecraft:quartz','8x minecraft:redstone'],480);
    }
    burnable(2,'#minecraft','coals',1,'');
    burnable(16,'#minecraft','poor_coals',1.5,'');
    burnable(1,'gtceu','coke_gem',.8,'dark_');
    

});