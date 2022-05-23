<root>
<voc-builder
    userDir="userDir"
    flowFile="./../../myVoc/exampleFlows.json"
    resources="./../../myVoc/resources"
  />
  <threejs-gizmo />
  {/*<node
    position={{ x: 6566.79833984375, y: 3397.817138671875, z: 4579.11767578125 }}
    orientation={{ w: 0.5553982257843018, x: 0.48762544989585876, y: 0.5958728790283203, z: -0.3141493499279022 }}>
    <light
      {...{ lighttype: 'directional' }}
      direction={{ x: 0, y: -1, z: 0 }}
      diffuse={{ r: 1.0, g: 1.0, b: 1.0 }}
      specular={{ r: 1.0, g: 1.0, b: 1.0 }}>
    </light>
</node>*/}
  <node
    position={{ x: 0.0, y: 0.0, z: -0.0 }}
    orientation={{ w: 1.0, x: 0.0, y: 0.0, z: -0.0 }}
    scale={{ x: 19.599594116210938, y: 19.599594116210938, z: 19.599594116210938 }}>
    <mesh
      {...{ url: 'Plane.mesh' }}
      physical={{ raycast: true }}
      done={ m => {m.addPhysicalShape({shape: 'mesh', mesh: 'Plane_phy.obj', mass: 1 })  } }>
    </mesh>
  </node>
  <node
    position={{ x: 0.0, y: 0.0, z: -0.0 }}
    orientation={{ w: 1.0, x: 0.0, y: 0.0, z: -0.0 }}
    scale={{ x: 1.0, y: 1.0, z: 1.0 }}>
    <mesh
      {...{ url: 'hazkulso.mesh' }}
      physical={{ raycast: true }}
      done={ m => {m.addPhysicalShape({shape: 'mesh', mesh: 'hazkulso_phy.obj', mass: 1 })  } }>
    </mesh>
  </node>
  <node
    position={{ x: 0.0, y: 0.0, z: -0.0 }}
    orientation={{ w: 1.0, x: 0.0, y: 0.0, z: -0.0 }}
    scale={{ x: 1.0, y: 1.0, z: 1.0 }}>
    <mesh
      {...{ url: 'hazbelso.mesh' }}
      physical={{ raycast: true }}
      done={ m => {m.addPhysicalShape({shape: 'mesh', mesh: 'hazbelso_phy.obj', mass: 1 })  } }>
    </mesh>
  </node>
  {/*<node
    position={{ x: 1318.2764892578125, y: 590.668212890625, z: -1934.6466064453125 }}
    orientation={{ w: 0.0, x: -0.0, y: 0.7071217894554138, z: -0.707091748714447 }}
    scale={{ x: -1.0, y: -0.9999999403953552, z: -0.9999999403953552 }}>
    <mesh
      {...{ url: 'ablak.mesh' }}
      physical={{ raycast: true }}
      done={ m => {m.addPhysicalShape({shape: 'mesh', mesh: 'ablak_phy.obj', mass: 1 })  } }>
    </mesh>
  </node>
  <node
    position={{ x: -766.719970703125, y: 590.668212890625, z: -1934.6466064453125 }}
    orientation={{ w: 0.707091748714447, x: 0.7071217894554138, y: 0.0, z: -0.0 }}
    scale={{ x: 1.0, y: 0.9999999403953552, z: 0.9999999403953552 }}>
    <mesh
      {...{ url: 'ablak.001.mesh' }}
      physical={{ raycast: true }}
      done={ m => {m.addPhysicalShape({shape: 'mesh', mesh: 'ablak.001_phy.obj', mass: 1 })  } }>
    </mesh>
  </node>
  <node
    position={{ x: 1930.838623046875, y: 590.668212890625, z: -767.4971313476562 }}
    orientation={{ w: 0.5001344084739685, x: 0.5001131296157837, y: 0.49988678097724915, z: -0.4998655915260315 }}
    scale={{ x: -1.0, y: -1.0, z: -1.0 }}>
    <mesh
      {...{ url: 'ablak.002.mesh' }}
      physical={{ raycast: true }}
      done={ m => {m.addPhysicalShape({shape: 'mesh', mesh: 'ablak.002_phy.obj', mass: 1 })  } }>
    </mesh>
  </node>
  <node
    position={{ x: 1930.838623046875, y: 590.668212890625, z: 766.0066528320312 }}
    orientation={{ w: 0.5001344084739685, x: 0.5001131296157837, y: 0.49988678097724915, z: -0.4998655915260315 }}
    scale={{ x: -1.0, y: -1.0, z: -1.0 }}>
    <mesh
      {...{ url: 'ablak.003.mesh' }}
      physical={{ raycast: true }}
      done={ m => {m.addPhysicalShape({shape: 'mesh', mesh: 'ablak.003_phy.obj', mass: 1 })  } }>
    </mesh>
  </node>
  <node
    position={{ x: 1318.2764892578125, y: 590.668212890625, z: 1891.0526123046875 }}
    orientation={{ w: 0.0, x: -0.0, y: 0.7071217894554138, z: -0.707091748714447 }}
    scale={{ x: -1.0, y: -0.9999999403953552, z: -0.9999999403953552 }}>
    <mesh
      {...{ url: 'ablak.004.mesh' }}
      physical={{ raycast: true }}
      done={ m => {m.addPhysicalShape({shape: 'mesh', mesh: 'ablak.004_phy.obj', mass: 1 })  } }>
    </mesh>
  </node>
  <node
    position={{ x: -95.54214477539062, y: 590.668212890625, z: 1891.0526123046875 }}
    orientation={{ w: 0.0, x: -0.0, y: 0.7071217894554138, z: -0.707091748714447 }}
    scale={{ x: -1.0, y: -0.9999999403953552, z: -0.9999999403953552 }}>
    <mesh
      {...{ url: 'ablak.005.mesh' }}
      physical={{ raycast: true }}
      done={ m => {m.addPhysicalShape({shape: 'mesh', mesh: 'ablak.005_phy.obj', mass: 1 })  } }>
    </mesh>
  </node>
  <node
    position={{ x: -1892.8125, y: 590.668212890625, z: 766.0066528320312 }}
    orientation={{ w: 0.5001344084739685, x: 0.5001131296157837, y: 0.49988678097724915, z: -0.4998655915260315 }}
    scale={{ x: -1.0, y: -1.0, z: -1.0 }}>
    <mesh
      {...{ url: 'ablak.006.mesh' }}
      physical={{ raycast: true }}
      done={ m => {m.addPhysicalShape({shape: 'mesh', mesh: 'ablak.006_phy.obj', mass: 1 })  } }>
    </mesh>
  </node>
  <node
    position={{ x: -1888.8651123046875, y: 590.668212890625, z: -767.4971313476562 }}
    orientation={{ w: 0.5001344084739685, x: 0.5001131296157837, y: 0.49988678097724915, z: -0.4998655915260315 }}
    scale={{ x: -1.0, y: -1.0, z: -1.0 }}>
    <mesh
      {...{ url: 'ablak.007.mesh' }}
      physical={{ raycast: true }}
      done={ m => {m.addPhysicalShape({shape: 'mesh', mesh: 'ablak.007_phy.obj', mass: 1 })  } }>
    </mesh>
  </node>
  <node
    position={{ x: -925.1093139648438, y: 414.4422912597656, z: 1900.964599609375 }}
    orientation={{ w: 0.7070476412773132, x: 0.7071658968925476, y: 0.0, z: -0.0 }}
    scale={{ x: 1.0, y: 1.0, z: 1.0 }}>
    <mesh
      {...{ url: 'ajto.001.mesh' }}
      physical={{ raycast: true }}
      done={ m => {m.addPhysicalShape({shape: 'mesh', mesh: 'ajto.001_phy.obj', mass: 1 })  } }>
    </mesh>
</node>*/}
  <node
    position={{ x: 0.0, y: 1070.935302734375, z: -0.0 }}
    orientation={{ w: 1.0, x: 0.0, y: 0.0, z: -0.0 }}
    scale={{ x: 1.0, y: 1.0, z: 1.0 }}>
    <mesh
      {...{ url: 'teto.001.mesh' }}
      physical={{ raycast: true }}
      done={ m => {m.addPhysicalShape({shape: 'mesh', mesh: 'teto.001_phy.obj', mass: 1 })  } }>
    </mesh>
  </node>
  {/*<node
    position={{ x: -298.244873046875, y: 411.22607421875, z: -33.57691955566406 }}
    orientation={{ w: 0.7070476412773132, x: 0.7071658968925476, y: 0.0, z: -0.0 }}
    scale={{ x: 1.0, y: 1.0, z: 1.0 }}>
    <mesh
      {...{ url: 'ajto.003.mesh' }}
      physical={{ raycast: true }}
      done={ m => {m.addPhysicalShape({shape: 'mesh', mesh: 'ajto.003_phy.obj', mass: 1 })  } }>
    </mesh>
  </node>
  <node
    position={{ x: 529.0563354492188, y: 411.22607421875, z: 570.929443359375 }}
    orientation={{ w: 0.4999294877052307, x: 0.5000130534172058, y: -0.4999869465827942, z: 0.5000705122947693 }}
    scale={{ x: 1.0, y: 0.9999999403953552, z: 0.9999999403953552 }}>
    <mesh
      {...{ url: 'ajto.004.mesh' }}
      physical={{ raycast: true }}
      done={ m => {m.addPhysicalShape({shape: 'mesh', mesh: 'ajto.004_phy.obj', mass: 1 })  } }>
    </mesh>
</node>*/}
  <node
    position={{ x: -662.74560546875, y: 2433.94482421875, z: -0.0 }}
    orientation={{ w: 1.6292068494294654e-07, x: -0.0, y: -0.0, z: 1.0 }}
    scale={{ x: 1.0, y: 1.0, z: 1.0 }}>
    <mesh
      {...{ url: 'kemeny.mesh' }}
      physical={{ raycast: true }}
      done={ m => {m.addPhysicalShape({shape: 'mesh', mesh: 'kemeny_phy.obj', mass: 1 })  } }>
    </mesh>
  </node>
  <node
    position={{ x: 0.0, y: 1056.03369140625, z: -0.0 }}
    orientation={{ w: 1.0, x: 0.0, y: 0.0, z: -0.0 }}
    scale={{ x: 19.310312271118164, y: 19.310312271118164, z: 19.310312271118164 }}>
    <mesh
      {...{ url: 'Plane.001.mesh' }}
      physical={{ raycast: true }}
      done={ m => {m.addPhysicalShape({shape: 'mesh', mesh: 'Plane.001_phy.obj', mass: 1 })  } }>
    </mesh>
  </node>
  <node
    position={{ x: 0.0, y: -8.96915054321289, z: -0.0 }}
    orientation={{ w: 1.0, x: 0.0, y: 0.0, z: -0.0 }}
    scale={{ x: 54.90477752685547, y: 54.90477752685547, z: 54.90477752685547 }}>
    <mesh
      {...{ url: 'Plane.002.mesh' }}
      physical={{ raycast: true }}
      done={ m => {m.addPhysicalShape({shape: 'mesh', mesh: 'Plane.002_phy.obj', mass: 1 })  } }>
    </mesh>
  </node>
</root>
