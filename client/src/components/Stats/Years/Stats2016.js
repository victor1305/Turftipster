import React, { Fragment } from 'react';
import { Table } from 'react-bootstrap'

const Stats2016 = () => {
    
    
    return (
        <Fragment>
            <h2 className = "stats-title">Stats 2016</h2>
            <div className = "table-stats-container">
            <Table striped bordered hover variant="dark" size = "sm" className = "table" responsive = "md">
                <thead

                >
                    <tr>
                    <th>Mes</th>
                    <th>Apuestas</th>
                    <th>Aciertos</th>
                    <th>Fallos</th>
                    <th>Nulos</th>
                    <th>% Acierto</th>
                    <th>Stake Medio</th>
                    <th>Uds Jugadas</th>
                    <th>Yield</th>
                    <th>Uds Ganadas</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Enero</td>
                        <td>24</td>
                        <td>11</td>
                        <td>13</td>
                        <td>0</td>
                        <td>45.83%</td>
                        <td>0.85</td>
                        <td>26.50</td>
                        <td className = "stats-green">55.85%</td>
                        <td className = "stats-green">14.80</td>
                    </tr>
                    <tr>
                        <td>Febrero</td>
                        <td>125</td>
                        <td>40</td>
                        <td>85</td>
                        <td>0</td>
                        <td>32.00%</td>
                        <td>1.10</td>
                        <td>137.00</td>
                        <td className = "stats-green">56.78%</td>
                        <td className = "stats-green">77.90</td>
                    </tr>
                    <tr>
                        <td>Marzo</td>
                        <td>117</td>
                        <td>48</td>
                        <td>79</td>
                        <td>0</td>
                        <td>41.02%</td>
                        <td>1.02</td>
                        <td>114.40</td>
                        <td className = "stats-green">39.80%</td>
                        <td className = "stats-green">45.53</td>
                    </tr>
                    <tr>
                        <td>Abril</td>
                        <td>108</td>
                        <td>32</td>
                        <td>75</td>
                        <td>1</td>
                        <td>29.62%</td>
                        <td>0.78</td>
                        <td>84.30</td>
                        <td className = "stats-red">-0.50%</td>
                        <td className = "stats-red">-0.42</td>
                    </tr>
                    <tr>
                        <td>Mayo</td>
                        <td>112</td>
                        <td>26</td>
                        <td>86</td>
                        <td>0</td>
                        <td>23.21%</td>
                        <td>0.82</td>
                        <td>91.50</td>
                        <td className = "stats-red">-27.50%</td>
                        <td className = "stats-red">-25.15</td>
                    </tr>
                    <tr>
                        <td>Junio</td>
                        <td>115</td>
                        <td>33</td>
                        <td>79</td>
                        <td>3</td>
                        <td>29.46%</td>
                        <td>0.69</td>
                        <td>79.50</td>
                        <td className = "stats-red">-6.08%</td>
                        <td className = "stats-red">-4.84</td>
                    </tr>
                    <tr>
                        <td>Julio</td>
                        <td>100</td>
                        <td>36</td>
                        <td>59</td>
                        <td>5</td>
                        <td>37.89%</td>
                        <td>0.72</td>
                        <td>72.15</td>
                        <td className = "stats-green">76.61%</td>
                        <td className = "stats-green">55.28</td>
                    </tr>
                    <tr>
                        <td>Agosto</td>
                        <td>122</td>
                        <td>49</td>
                        <td>73</td>
                        <td>0</td>
                        <td>40.16%</td>
                        <td>0.50</td>
                        <td>61.20</td>
                        <td className = "stats-green">42.18%</td>
                        <td className = "stats-green">26.20</td>
                    </tr>
                    <tr>
                        <td>Septiembre</td>
                        <td>109</td>
                        <td>37</td>
                        <td>69</td>
                        <td>3</td>
                        <td>34.91%</td>
                        <td>0.55</td>
                        <td>59.85</td>
                        <td className = "stats-green">27.81%</td>
                        <td className = "stats-green">16.65</td>
                    </tr>
                    <tr>
                        <td>Octubre</td>
                        <td>120</td>
                        <td>48</td>
                        <td>71</td>
                        <td>1</td>
                        <td>40.34%</td>
                        <td>0.48</td>
                        <td>57.70</td>
                        <td className = "stats-green">54.43%</td>
                        <td className = "stats-green">31.41</td>
                    </tr>
                    <tr>
                        <td>Noviembre</td>
                        <td>116</td>
                        <td>33</td>
                        <td>82</td>
                        <td>1</td>
                        <td>28.70%</td>
                        <td>0.62</td>
                        <td>71.40</td>
                        <td className = "stats-green">11.35%</td>
                        <td className = "stats-green">8.11</td>
                    </tr>
                    <tr>
                        <td>Diciembre</td>
                        <td>164</td>
                        <td>64</td>
                        <td>98</td>
                        <td>2</td>
                        <td>39.51%</td>
                        <td>0.53</td>
                        <td>86.80</td>
                        <td className = "stats-green">64.99%</td>
                        <td className = "stats-green">56.42</td>
                    </tr>
                    <tr>
                        <td>Total Año</td>
                        <td>1332</td>
                        <td>457</td>
                        <td>869</td>
                        <td>16</td>
                        <td>34.31%</td>
                        <td>0.70</td>
                        <td>942.30</td>
                        <td className = "stats-green">32.03%</td>
                        <td className = "stats-green">301.87</td>
                    </tr>
                </tbody>
            </Table>
            </div>
        </Fragment>
    );
}
 
export default Stats2016;