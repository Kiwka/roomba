import React from 'react';
import InstructionHolder from './instruction.styl.js';

const Instruction = () => <InstructionHolder>
  <h4>Goal</h4>
  <p>The goal of the program is to take the room dimensions, the locations of the dirt patches, the hoover location and the driving instructions as input and to then output the following:</p>
  <ul>
    <li>The final hoover position (X, Y)</li>
    <li>The number of patches of dirt the robot cleaned up</li>
  </ul>
  <h4>Input</h4>
  <p>Program input will be either through a file upload or plain text form input, using the format described here. You can process it however you like.</p>
  <p>Example:</p>
  <code>
    <div>5 5</div>
    <div>1 2</div>
    <div>1 0</div>
    <div>2 2</div>
    <div>2 3</div>
    <div>NNESEESWNWW</div>
  </code>
  <ul>
    <li>the first line holds the room dimensions (X Y), separated by a single space (all coordinates will be presented in this format)</li>
    <li>the second line holds the hoover position</li>
    <li>subsequent lines contain the zero or more positions of patches of dirt (one per line)</li>
    <li>the next line then always contains the driving instructions (at least one)</li>
  </ul>
  <h4>Output</h4>
  <p>Program output should at a minimum print the following to the browser console:</p>
  <ul>
    <li>The X and Y coordinates marking the position of the hoover after processing all commands.</li>
    <li>The number of patches of dirt the robot cleaned up</li>
  </ul>
  <p>Example (matching the input above):</p>
  <code>
    <div>1 3</div>
    <div>1</div>
  </code>
</InstructionHolder>;

export default Instruction;
