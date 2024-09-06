import React from 'react';
import { TiTick } from "react-icons/ti";
import { FaX, FaXmark } from "react-icons/fa6";
import { GoDash } from "react-icons/go";
import { BsDash } from "react-icons/bs";

const LeagueTable = () => {
  return (
    <div>
      <table className='league-table'>
        <thead>
          <tr>
            <th>#</th>
            <th>Club</th>
            <th>P</th>
            <th>W</th>
            <th>L</th>
            <th>D</th>
            <th>GF</th>
            <th>GA</th>
            <th>GD</th>
            <th>PTS</th>
            <th>Form</th>
          </tr>
        </thead>

        <tbody>
    <tr>
      <td>1</td>
      <td>Ereteti FC</td>
      <td>3</td>
      <td>3</td>
      <td>0</td>
      <td>0</td>
      <td>9</td>
      <td>2</td>
      <td>+7</td>
      <td>9</td>
      <td className='club-form'>
        <p class="form win"><TiTick /></p>
        <p class="form loss"><FaXmark /></p>
        <p class="form draw"><BsDash /></p>
      </td>
    </tr>

    <tr>
      <td>2</td>
      <td>JECIZ FC</td>
      <td>3</td>
      <td>3</td>
      <td>0</td>
      <td>0</td>
      <td>9</td>
      <td>2</td>
      <td>+7</td>
      <td>9</td>
      <td className='club-form'>
        <p class="form win"><TiTick /></p>
        <p class="form loss"><FaXmark /></p>
        <p class="form draw"><BsDash /></p>
      </td>
    </tr>

    <tr>
      <td>3</td>
      <td>TINGA FC</td>
      <td>3</td>
      <td>3</td>
      <td>0</td>
      <td>0</td>
      <td>9</td>
      <td>2</td>
      <td>+7</td>
      <td>9</td>
      <td className='club-form'>
        <p class="form win"><TiTick /></p>
        <p class="form loss"><FaXmark /></p>
        <p class="form draw"><BsDash /></p>
      </td>
    </tr>

    <tr>
      <td>4</td>
      <td>SPANNER FC</td>
      <td>3</td>
      <td>3</td>
      <td>0</td>
      <td>0</td>
      <td>9</td>
      <td>2</td>
      <td>+7</td>
      <td>9</td>
      <td className='club-form'>
        <p class="form win"><TiTick /></p>
        <p class="form loss"><FaXmark /></p>
        <p class="form draw"><BsDash /></p>
      </td>
    </tr>

    <tr>
      <td>5</td>
      <td>MARINES FC</td>
      <td>3</td>
      <td>3</td>
      <td>0</td>
      <td>0</td>
      <td>9</td>
      <td>2</td>
      <td>+7</td>
      <td>9</td>
      <td className='club-form'>
        <p class="form win"><TiTick /></p>
        <p class="form loss"><FaXmark /></p>
        <p class="form draw"><BsDash /></p>
      </td>
    </tr>

    <tr>
      <td>6</td>
      <td>MAASAI FLOWERS FC</td>
      <td>3</td>
      <td>3</td>
      <td>0</td>
      <td>0</td>
      <td>9</td>
      <td>2</td>
      <td>+7</td>
      <td>9</td>
      <td className='club-form'>
        <p class="form win"><TiTick /></p>
        <p class="form loss"><FaXmark /></p>
        <p class="form draw"><BsDash /></p>
      </td>
    </tr>

    <tr>
      <td>7</td>
      <td>PRISON FC</td>
      <td>3</td>
      <td>3</td>
      <td>0</td>
      <td>0</td>
      <td>9</td>
      <td>2</td>
      <td>+7</td>
      <td>9</td>
      <td className='club-form'>
        <p class="form win"><TiTick /></p>
        <p class="form loss"><FaXmark /></p>
        <p class="form draw"><BsDash /></p>
      </td>
    </tr>

    <tr>
      <td>8</td>
      <td>C.F. PARK FC</td>
      <td>3</td>
      <td>3</td>
      <td>0</td>
      <td>0</td>
      <td>9</td>
      <td>2</td>
      <td>+7</td>
      <td>9</td>
      <td className='club-form'>
        <p class="form win"><TiTick /></p>
        <p class="form loss"><FaXmark /></p>
        <p class="form draw"><BsDash /></p>
      </td>
    </tr>

    <tr>
      <td>9</td>
      <td>SUNSHINE LEGENDS FC</td>
      <td>3</td>
      <td>3</td>
      <td>0</td>
      <td>0</td>
      <td>9</td>
      <td>2</td>
      <td>+7</td>
      <td>9</td>
      <td className='club-form'>
        <p class="form win"><TiTick /></p>
        <p class="form loss"><FaXmark /></p>
        <p class="form draw"><BsDash /></p>
      </td>
    </tr>

    <tr>
      <td>10</td>
      <td>MASHIMONI FC</td>
      <td>3</td>
      <td>3</td>
      <td>0</td>
      <td>0</td>
      <td>9</td>
      <td>2</td>
      <td>+7</td>
      <td>9</td>
      <td className='club-form'>
        <p class="form win"><TiTick /></p>
        <p class="form loss"><FaXmark /></p>
        <p class="form draw"><BsDash /></p>
      </td>
    </tr>

    <tr>
      <td>11</td>
      <td>GOLDEN AXE DEAF FC</td>
      <td>3</td>
      <td>3</td>
      <td>0</td>
      <td>0</td>
      <td>9</td>
      <td>2</td>
      <td>+7</td>
      <td>9</td>
      <td className='club-form'>
        <p class="form win"><TiTick /></p>
        <p class="form loss"><FaXmark /></p>
        <p class="form draw"><BsDash /></p>
      </td>
    </tr>

    <tr>
      <td>12</td>
      <td>ALLYBABA FC</td>
      <td>3</td>
      <td>3</td>
      <td>0</td>
      <td>0</td>
      <td>9</td>
      <td>2</td>
      <td>+7</td>
      <td>9</td>
      <td className='club-form'>
        <p class="form win"><TiTick /></p>
        <p class="form loss"><FaXmark /></p>
        <p class="form draw"><BsDash /></p>
      </td>
    </tr>

    <tr>
      <td>13</td>
      <td>SOCCER SHARKS FC</td>
      <td>3</td>
      <td>3</td>
      <td>0</td>
      <td>0</td>
      <td>9</td>
      <td>2</td>
      <td>+7</td>
      <td>9</td>
      <td className='club-form'>
        <p class="form win"><TiTick /></p>
        <p class="form loss"><FaXmark /></p>
        <p class="form draw"><BsDash /></p>
      </td>
    </tr>

    <tr>
      <td>14</td>
      <td>EVERGREEN FC</td>
      <td>3</td>
      <td>3</td>
      <td>0</td>
      <td>0</td>
      <td>9</td>
      <td>2</td>
      <td>+7</td>
      <td>9</td>
      <td className='club-form'>
        <p class="form win"><TiTick /></p>
        <p class="form loss"><FaXmark /></p>
        <p class="form draw"><BsDash /></p>
      </td>
    </tr>

    <tr>
      <td>15</td>
      <td>HOPE STAR FC</td>
      <td>3</td>
      <td>3</td>
      <td>0</td>
      <td>0</td>
      <td>9</td>
      <td>2</td>
      <td>+7</td>
      <td>9</td>
      <td className='club-form'>
        <p class="form win"><TiTick /></p>
        <p class="form loss"><FaXmark /></p>
        <p class="form draw"><BsDash /></p>
      </td>
    </tr>

    <tr>
      <td>16</td>
      <td>LUCKY BASE FC</td>
      <td>3</td>
      <td>3</td>
      <td>0</td>
      <td>0</td>
      <td>9</td>
      <td>2</td>
      <td>+7</td>
      <td>9</td>
      <td className='club-form'>
        <p class="form loss"><FaXmark /></p>
        <p class="form loss"><FaXmark /></p>
        <p class="form loss"><FaXmark /></p>
      </td>
    </tr>
    
  </tbody>
      </table>
    </div>
  )
}

export default LeagueTable
