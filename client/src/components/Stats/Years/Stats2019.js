import React, { Fragment } from 'react';
import { Table } from 'react-bootstrap'

const Stats2019 = () => {
    
    
    return (
        <Fragment>
            <h2 className = "stats-title">Stats 2019</h2>
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
                        <td>293</td>
                        <td>88</td>
                        <td>198</td>
                        <td>7</td>
                        <td>30.77%</td>
                        <td>0.27</td>
                        <td>78.4</td>
                        <td className = "stats-green">25.00%</td>
                        <td className = "stats-green">19.60</td>
                    </tr>
                    <tr>
                        <td>Febrero</td>
                        <td>259</td>
                        <td>88</td>
                        <td>169</td>
                        <td>2</td>
                        <td>30.77%</td>
                        <td>0.21</td>
                        <td>54.35</td>
                        <td className = "stats-green">33.14%</td>
                        <td className = "stats-green">18.01</td>
                    </tr>
                    <tr>
                        <td>Marzo</td>
                        <td>247</td>
                        <td>69</td>
                        <td>177</td>
                        <td>1</td>
                        <td>28.05%</td>
                        <td>0.21</td>
                        <td>51.45</td>
                        <td className = "stats-green">64.21%</td>
                        <td className = "stats-green">33.03</td>
                    </tr>
                    <tr>
                        <td>Abril</td>
                        <td>197</td>
                        <td>62</td>
                        <td>134</td>
                        <td>1</td>
                        <td>31.63%</td>
                        <td>0.23</td>
                        <td>44.95</td>
                        <td className = "stats-green">2.78%</td>
                        <td className = "stats-green">1.25</td>
                    </tr>
                    <tr>
                        <td>Mayo</td>
                        <td>203</td>
                        <td>52</td>
                        <td>149</td>
                        <td>2</td>
                        <td>25.87%</td>
                        <td>0.21</td>
                        <td>42.95</td>
                        <td className = "stats-green">5.97%</td>
                        <td className = "stats-green">2.56</td>
                    </tr>
                    <tr>
                        <td>Junio</td>
                        <td>183</td>
                        <td>51</td>
                        <td>132</td>
                        <td>0</td>
                        <td>27.87%</td>
                        <td>0.21</td>
                        <td>39.10</td>
                        <td className = "stats-green">19.48%</td>
                        <td className = "stats-green">7.62</td>
                    </tr>
                    <tr>
                        <td>Julio</td>
                        <td>233</td>
                        <td>77</td>
                        <td>152</td>
                        <td>4</td>
                        <td>33.62%</td>
                        <td>0.22</td>
                        <td>51.15</td>
                        <td className = "stats-green">52.28%</td>
                        <td className = "stats-green">26.74</td>
                    </tr>
                    <tr>
                        <td>Agosto</td>
                        <td>255</td>
                        <td>82</td>
                        <td>173</td>
                        <td>0</td>
                        <td>32.16%</td>
                        <td>0.22</td>
                        <td>56.55</td>
                        <td className = "stats-green">28.28%</td>
                        <td className = "stats-green">15.99</td>
                    </tr>
                    <tr>
                        <td>Septiembre</td>
                        <td>183</td>
                        <td>43</td>
                        <td>136</td>
                        <td>4</td>
                        <td>24.02%</td>
                        <td>0.19</td>
                        <td>35.20</td>
                        <td className = "stats-red">-5.32%</td>
                        <td className = "stats-red">-1.87</td>
                    </tr>
                    <tr>
                        <td>Octubre</td>
                        <td>187</td>
                        <td>51</td>
                        <td>135</td>
                        <td>1</td>
                        <td>27.42%</td>
                        <td>0.21</td>
                        <td>38.55</td>
                        <td className = "stats-green">35.60%</td>
                        <td className = "stats-green">13.73</td>
                    </tr>
                    <tr>
                        <td>Noviembre</td>
                        <td>221</td>
                        <td>60</td>
                        <td>157</td>
                        <td>3</td>
                        <td>27.65%</td>
                        <td>0.19</td>
                        <td>42.40</td>
                        <td className = "stats-green">28.10%</td>
                        <td className = "stats-green">11.91</td>
                    </tr>
                    <tr>
                        <td>Diciembre</td>
                        <td>217</td>
                        <td>40</td>
                        <td>174</td>
                        <td>2</td>
                        <td>18.69%</td>
                        <td>0.20</td>
                        <td>43.00</td>
                        <td className = "stats-red">-15.84%</td>
                        <td className = "stats-red">-6.81</td>
                    </tr>
                    <tr>
                        <td>Total Año</td>
                        <td>2678</td>
                        <td>763</td>
                        <td>1886</td>
                        <td>27</td>
                        <td>18.69%</td>
                        <td>0.22</td>
                        <td>578.05</td>
                        <td className = "stats-green">24.52%</td>
                        <td className = "stats-green">141.77</td>
                    </tr>
                </tbody>
            </Table>
            </div>
        </Fragment>
    );
}
 
export default Stats2019;