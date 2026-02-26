// Portions of this file are Copyright 2021 Google LLC, and licensed under GPL2+. See COPYING.

export default `/*
  OpenSCAD Playground
  https://github.com/openscad/openscad-playground
  
  Documentation: https://openscad.org/documentation.html
  Libraries: https://openscad.org/libraries.html
*/

// Simple cube with hole
difference() {
  cube([30, 30, 10], center = true);
  cylinder(r = 5, h = 20, center = true);
}

// Add a sphere on top
translate([0, 0, 10]) {
  sphere(r = 8);
}
`;
