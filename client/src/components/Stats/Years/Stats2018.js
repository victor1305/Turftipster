import React, { Fragment } from 'react';
import { Table } from 'react-bootstrap'

const Stats2018 = () => {
    
    
    return (
        <Fragment>
            <h2 className = "stats-title">Stats 2018</h2>
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
                        <td>139</td>
                        <td>40</td>
                        <td>94</td>
                        <td>5</td>
                        <td>29.85%</td>
                        <td>0.31</td>
                        <td>42.40</td>
                        <td className = "stats-green">36.73%</td>
                        <td className = "stats-green">15.57</td>
                    </tr>
                    <tr>
                        <td>Febrero</td>
                        <td>81</td>
                        <td>24</td>
                        <td>55</td>
                        <td>2</td>
                        <td>30.38%</td>
                        <td>0.37</td>
                        <td>29.90</td>
                        <td className = "stats-green">1.38%</td>
                        <td className = "stats-green">0.41</td>
                    </tr>
                    <tr>
                        <td>Marzo</td>
                        <td>106</td>
                        <td>26</td>
                        <td>78</td>
                        <td>2</td>
                        <td>32.04%</td>
                        <td>0.39</td>
                        <td>41.40</td>
                        <td className = "stats-red">-10.98%</td>
                        <td className = "stats-red">-4.54</td>
                    </tr>
                    <tr>
                        <td>Abril</td>
                        <td>182</td>
                        <td>58</td>
                        <td>123</td>
                        <td>1</td>
                        <td>32.04%</td>
                        <td>0.24</td>
                        <td>43.05</td>
                        <td className = "stats-green">28.52%</td>
                        <td className = "stats-green">12.28</td>
                    </tr>
                    <tr>
                        <td>Mayo</td>
                        <td>186</td>
                        <td>61</td>
                        <td>125</td>
                        <td>0</td>
                        <td>32.80%</td>
                        <td>0.25</td>
                        <td>46.20</td>
                        <td className = "stats-green">9.45%</td>
                        <td className = "stats-green">4.37</td>
                    </tr>
                    <tr>
                        <td>Junio</td>
                        <td>184</td>
                        <td>54</td>
                        <td>130</td>
                        <td>0</td>
                        <td>29.35%</td>
                        <td>0.28</td>
                        <td>51.05</td>
                        <td className = "stats-green">3.45%</td>
                        <td className = "stats-green">1.76</td>
                    </tr>
                    <tr>
                        <td>Julio</td>
                        <td>217</td>
                        <td>60</td>
                        <td>155</td>
                        <td>2</td>
                        <td>27.91%</td>
                        <td>0.30</td>
                        <td>66.15</td>
                        <td className = "stats-red">-2.13%</td>
                        <td className = "stats-red">-1.41</td>
                    </tr>
                    <tr>
                        <td>Agosto</td>
                        <td>202</td>
                        <td>69</td>
                        <td>130</td>
                        <td>3</td>
                        <td>34.67%</td>
                        <td>0.29</td>
                        <td>57.85</td>
                        <td className = "stats-green">12.94%</td>
                        <td className = "stats-green">7.49</td>
                    </tr>
                    <tr>
                        <td>Septiembre</td>
                        <td>177</td>
                        <td>70</td>
                        <td>106</td>
                        <td>1</td>
                        <td>39.77%</td>
                        <td>0.28</td>
                        <td>50.05</td>
                        <td className = "stats-green">57.26%</td>
                        <td className = "stats-green">28.66</td>
                    </tr>
                    <tr>
                        <td>Octubre</td>
                        <td>259</td>
                        <td>58</td>
                        <td>199</td>
                        <td>2</td>
                        <td>22.57%</td>
                        <td>0.20</td>
                        <td>52.60</td>
                        <td className = "stats-green">13.11%</td>
                        <td className = "stats-green">6.89</td>
                    </tr>
                    <tr>
                        <td>Noviembre</td>
                        <td>174</td>
                        <td>46</td>
                        <td>123</td>
                        <td>5</td>
                        <td>27.22%</td>
                        <td>0.25</td>
                        <td>43.10</td>
                        <td className = "stats-green">14.97%</td>
                        <td className = "stats-green">6.45</td>
                    </tr>
                    <tr>
                        <td>Diciembre</td>
                        <td>247</td>
                        <td>58</td>
                        <td>189</td>
                        <td>0</td>
                        <td>23.48%</td>
                        <td>0.21</td>
                        <td>50.65</td>
                        <td className = "stats-red">-22.20%</td>
                        <td className = "stats-red">-11.24</td>
                    </tr>
                    <tr>
                        <td>Total Año</td>
                        <td>2154</td>
                        <td>624</td>
                        <td>1507</td>
                        <td>23</td>
                        <td>29.28%</td>
                        <td>0.27</td>
                        <td>574.40</td>
                        <td className = "stats-green">11.61%</td>
                        <td className = "stats-green">66.68</td>
                    </tr>
                </tbody>
            </Table>
            </div>
        </Fragment>
    );
}
 
export default Stats2018;