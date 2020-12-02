import React, { Fragment } from 'react';
import { Table } from 'react-bootstrap'

const Stats2017 = () => {
    
    
    return (
        <Fragment>
            <h2 className = "stats-title">Stats 2017</h2>
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
                        <td>172</td>
                        <td>47</td>
                        <td>125</td>
                        <td>0</td>
                        <td>27.33%</td>
                        <td>0.52</td>
                        <td>89.40</td>
                        <td className = "stats-green">6.00%</td>
                        <td className = "stats-green">5.36</td>
                    </tr>
                    <tr>
                        <td>Febrero</td>
                        <td>142</td>
                        <td>33</td>
                        <td>107</td>
                        <td>2</td>
                        <td>23.57%</td>
                        <td>0.44</td>
                        <td>62.60</td>
                        <td className = "stats-red">-15.91%</td>
                        <td className = "stats-red">-9.96</td>
                    </tr>
                    <tr>
                        <td>Marzo</td>
                        <td>85</td>
                        <td>17</td>
                        <td>66</td>
                        <td>2</td>
                        <td>20.48%</td>
                        <td>0.58</td>
                        <td>49.25</td>
                        <td className = "stats-red">-45.68%</td>
                        <td className = "stats-red">-22.50</td>
                    </tr>
                    <tr>
                        <td>Abril</td>
                        <td>99</td>
                        <td>45</td>
                        <td>53</td>
                        <td>1</td>
                        <td>45.92%</td>
                        <td>0.36</td>
                        <td>36.10</td>
                        <td className = "stats-green">54.30%</td>
                        <td className = "stats-green">19.60</td>
                    </tr>
                    <tr>
                        <td>Mayo</td>
                        <td>106</td>
                        <td>43</td>
                        <td>63</td>
                        <td>0</td>
                        <td>40.57%</td>
                        <td>0.39</td>
                        <td>41.05</td>
                        <td className = "stats-green">47.39%</td>
                        <td className = "stats-green">19.46</td>
                    </tr>
                    <tr>
                        <td>Junio</td>
                        <td>126</td>
                        <td>45</td>
                        <td>81</td>
                        <td>0</td>
                        <td>35.71%</td>
                        <td>0.42</td>
                        <td>53.40</td>
                        <td className = "stats-green">29.29%</td>
                        <td className = "stats-green">15.64</td>
                    </tr>
                    <tr>
                        <td>Julio</td>
                        <td>178</td>
                        <td>86</td>
                        <td>89</td>
                        <td>3</td>
                        <td>49.14%</td>
                        <td>0.42</td>
                        <td>70.30</td>
                        <td className = "stats-green">77.81%</td>
                        <td className = "stats-green">54.70</td>
                    </tr>
                    <tr>
                        <td>Agosto</td>
                        <td>197</td>
                        <td>69</td>
                        <td>126</td>
                        <td>2</td>
                        <td>35.38%</td>
                        <td>0.38</td>
                        <td>75.10</td>
                        <td className = "stats-green">29.33%</td>
                        <td className = "stats-green">22.03</td>
                    </tr>
                    <tr>
                        <td>Septiembre</td>
                        <td>184</td>
                        <td>82</td>
                        <td>102</td>
                        <td>0</td>
                        <td>44.57%</td>
                        <td>0.36</td>
                        <td>65.45</td>
                        <td className = "stats-green">52.37%</td>
                        <td className = "stats-green">34.28</td>
                    </tr>
                    <tr>
                        <td>Octubre</td>
                        <td>159</td>
                        <td>58</td>
                        <td>100</td>
                        <td>1</td>
                        <td>36.71%</td>
                        <td>0.35</td>
                        <td>56.00</td>
                        <td className = "stats-green">0.87%</td>
                        <td className = "stats-green">0.49</td>
                    </tr>
                    <tr>
                        <td>Noviembre</td>
                        <td>151</td>
                        <td>37</td>
                        <td>113</td>
                        <td>1</td>
                        <td>24.67%</td>
                        <td>0.34</td>
                        <td>51.00</td>
                        <td className = "stats-green">27.86%</td>
                        <td className = "stats-green">14.21</td>
                    </tr>
                    <tr>
                        <td>Diciembre</td>
                        <td>99</td>
                        <td>29</td>
                        <td>69</td>
                        <td>1</td>
                        <td>29.59%</td>
                        <td>0.38</td>
                        <td>37.70</td>
                        <td className = "stats-green">0.25%</td>
                        <td className = "stats-green">0.10</td>
                    </tr>
                    <tr>
                        <td>Total Año</td>
                        <td>1698</td>
                        <td>591</td>
                        <td>1094</td>
                        <td>13</td>
                        <td>35.07%</td>
                        <td>0.40</td>
                        <td>687.35</td>
                        <td className = "stats-green">22.32%</td>
                        <td className = "stats-green">153.41</td>
                    </tr>
                </tbody>
            </Table>
            </div>
        </Fragment>
    );
}
 
export default Stats2017;