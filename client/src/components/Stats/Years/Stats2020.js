import React, { Fragment } from 'react';
import { Table } from 'react-bootstrap'

const Stats2020 = () => {
    
    
    return (
        <Fragment>
            <h2 className = "stats-title">Stats 2020</h2>
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
                        <td>189</td>
                        <td>45</td>
                        <td>144</td>
                        <td>0</td>
                        <td>23.81%</td>
                        <td>0.17</td>
                        <td>31.5</td>
                        <td className = "stats-green">88.96%</td>
                        <td className = "stats-green">28.02</td>
                    </tr>
                    <tr>
                        <td>Febrero</td>
                        <td>237</td>
                        <td>41</td>
                        <td>196</td>
                        <td>0</td>
                        <td>17.30%</td>
                        <td>0.18</td>
                        <td>41.90</td>
                        <td className = "stats-red">-20.07%</td>
                        <td className = "stats-red">-8.41</td>
                    </tr>
                    <tr>
                        <td>Marzo</td>
                        <td>88</td>
                        <td>27</td>
                        <td>59</td>
                        <td>2</td>
                        <td>31.40%</td>
                        <td>0.22</td>
                        <td>19.60</td>
                        <td className = "stats-green">27.14%</td>
                        <td className = "stats-green">5.32</td>
                    </tr>
                    <tr>
                        <td>Abril</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>---</td>
                        <td>---</td>
                        <td>0</td>
                        <td className = "stats-blue">---</td>
                        <td className = "stats-blue">0</td>
                    </tr>
                    <tr>
                        <td>Mayo</td>
                        <td>157</td>
                        <td>37</td>
                        <td>119</td>
                        <td>1</td>
                        <td>23.72%</td>
                        <td>0.19</td>
                        <td>29.70</td>
                        <td className = "stats-green">5.42%</td>
                        <td className = "stats-green">1.61</td>
                    </tr>
                    <tr>
                        <td>Junio</td>
                        <td>186</td>
                        <td>43</td>
                        <td>130</td>
                        <td>13</td>
                        <td>24.86%</td>
                        <td>0.22</td>
                        <td>41.40</td>
                        <td className = "stats-red">-7.24%</td>
                        <td className = "stats-red">-3.00</td>
                    </tr>
                    <tr>
                        <td>Julio</td>
                        <td>304</td>
                        <td>65</td>
                        <td>217</td>
                        <td>22</td>
                        <td>23.05%</td>
                        <td>0.21</td>
                        <td>63.35</td>
                        <td className = "stats-red">-1.50%</td>
                        <td className = "stats-red">-0.95</td>
                    </tr>
                    <tr>
                        <td>Agosto</td>
                        <td>226</td>
                        <td>67</td>
                        <td>154</td>
                        <td>5</td>
                        <td>30.32%</td>
                        <td>0.23</td>
                        <td>51.65</td>
                        <td className = "stats-green">29.08%</td>
                        <td className = "stats-green">15.02</td>
                    </tr>
                    <tr>
                        <td>Septiembre</td>
                        <td>205</td>
                        <td>70</td>
                        <td>122</td>
                        <td>13</td>
                        <td>36.46%</td>
                        <td>0.23</td>
                        <td>48.05</td>
                        <td className = "stats-green">83.39%</td>
                        <td className = "stats-green">40.07</td>
                    </tr>
                    <tr>
                        <td>Octubre</td>
                        <td>252</td>
                        <td>71</td>
                        <td>179</td>
                        <td>2</td>
                        <td>28.40%</td>
                        <td>0.22</td>
                        <td>54.30</td>
                        <td className = "stats-green">19.53%</td>
                        <td className = "stats-green">10.61</td>
                    </tr>
                    <tr>
                        <td>Noviembre</td>
                        <td>242</td>
                        <td>77</td>
                        <td>164</td>
                        <td>1</td>
                        <td>31.95%</td>
                        <td>0.23</td>
                        <td>56.10</td>
                        <td className = "stats-green">33.13%</td>
                        <td className = "stats-green">18.59</td>
                    </tr>
                    <tr>
                        <td>Diciembre</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>---</td>
                        <td>---</td>
                        <td>0</td>
                        <td className = "stats-blue">---</td>
                        <td className = "stats-blue">0</td>
                    </tr>
                    <tr>
                        <td>Total Año</td>
                        <td>2086</td>
                        <td>543</td>
                        <td>1484</td>
                        <td>59</td>
                        <td>26.79%</td>
                        <td>0.21</td>
                        <td>437.55</td>
                        <td className = "stats-green">24.43%</td>
                        <td className = "stats-green">106.87</td>
                    </tr>
                </tbody>
            </Table>
            </div>
        </Fragment>
    );
}
 
export default Stats2020;