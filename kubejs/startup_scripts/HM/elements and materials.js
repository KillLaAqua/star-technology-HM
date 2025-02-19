
materialRegistry(event => {

    event.create('raw_electrum')
        .ingot(1)
        .components('2x gold', '3x silver')
        .color(0xeddda5)
        .iconSet(SHINY)
        .flags(foil, gear, long_rod, plates,
            rod, rotor, small_gear, ring, frame, bolt_and_screw);

});