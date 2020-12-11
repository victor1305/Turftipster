import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap'
import BetService from '../../../service/BetService'

const StatsRaceCourses = (props) => {

    const betservice = new BetService()

    const [ betList, loadBetList ] = useState([])

    const [ racecourse, updateRacecourse ] = useState({})

    const racecoursesTotalArray = Object.values(racecourse)
    const racecoursesArray = racecoursesTotalArray.filter(elm => (elm.bets > 0))
    racecoursesArray.sort((a, b) => b.profitUds - a.profitUds)

    useEffect(() => {

        loadData()       

    // eslint-disable-next-line
    }, [props])

    useEffect(() => {

        updateValues()       

    // eslint-disable-next-line
    }, [betList])


    const loadData = () => {

        betservice
            .getBetsYear(props.statYear)
            .then(response => (
                loadBetList(response.data)
                
            ))
            .catch(err => console.log(err))

    }

    const updateValues = () => {

        //-----------------------RACECOURSES ARRAYS----------------------------------------

        const aixLesBainsArray = betList.filter(elm => (elm.racecourse === "Aix Les Bains"))
        const amiensArray = betList.filter(elm => (elm.racecourse === "Amiens"))
        const angersArray = betList.filter(elm => (elm.racecourse === "Angers"))
        const argentanArray = betList.filter(elm => (elm.racecourse === "Argentan"))
        const bordeauxLeBouscatArray = betList.filter(elm => (elm.racecourse === "Bordeaux Le Bouscat"))
        const cagnesSurMerArray = betList.filter(elm => (elm.racecourse === "Cagnes Sur Mer"))
        const chantillyArray = betList.filter(elm => (elm.racecourse === "Chantilly"))
        const chateaubriantArray = betList.filter(elm => (elm.racecourse === "Chateaubriant"))
        const choletArray = betList.filter(elm => (elm.racecourse === "Cholet"))
        const clairefontaineArray = betList.filter(elm => (elm.racecourse === "Clairefontaine"))
        const compiegneArray = betList.filter(elm => (elm.racecourse === "Compiegne"))
        const craonArray = betList.filter(elm => (elm.racecourse === "Craon"))
        const daxArray = betList.filter(elm => (elm.racecourse === "Dax"))
        const deauvilleArray = betList.filter(elm => (elm.racecourse === "Deauville"))
        const dieppeArray = betList.filter(elm => (elm.racecourse === "Dieppe"))
        const dosHermanasArray = betList.filter(elm => (elm.racecourse === "Dos Hermanas"))
        const evreuxArray = betList.filter(elm => (elm.racecourse === "Evreux"))
        const fontainebleauArray = betList.filter(elm => (elm.racecourse === "Fontainebleau"))
        const laTesteDeBuchArray = betList.filter(elm => (elm.racecourse === "La Teste de Buch"))
        const leliondangersArray = betList.filter(elm => (elm.racecourse === "Le Lion d'Angers"))
        const lemansArray = betList.filter(elm => (elm.racecourse === "Le Mans"))
        const letouquetArray = betList.filter(elm => (elm.racecourse === "Le Touquet"))
        const lesSablesdOlonneArray = betList.filter(elm => (elm.racecourse === "Les Sables D'Olonne"))
        const longchampArray = betList.filter(elm => (elm.racecourse === "Longchamp"))
        const lyonLaSoieArray = betList.filter(elm => (elm.racecourse === "Lyon La Soie"))
        const lyonParillyArray = betList.filter(elm => (elm.racecourse === "Lyon Parilly"))
        const machecoulArray = betList.filter(elm => (elm.racecourse === "Machecoul"))
        const marseilleBorelyArray = betList.filter(elm => (elm.racecourse === "Marseille Borely"))
        const marseilleVivauxArray = betList.filter(elm => (elm.racecourse === "Marseille Vivaux"))
        const meydanArray = betList.filter(elm => (elm.racecourse === "Meydan"))
        const montDeMarsanArray = betList.filter(elm => (elm.racecourse === "Mont de Marsan"))
        const moulinsArray = betList.filter(elm => (elm.racecourse === "Moulins"))
        const nancyArray = betList.filter(elm => (elm.racecourse === "Nancy"))
        const nantesArray = betList.filter(elm => (elm.racecourse === "Nantes"))
        const pauArray = betList.filter(elm => (elm.racecourse === "Pau"))
        const pinedaArray = betList.filter(elm => (elm.racecourse === "Pineda"))
        const pornichetArray = betList.filter(elm => (elm.racecourse === "Pornichet"))
        const saintCloudArray = betList.filter(elm => (elm.racecourse === "Saint Cloud"))
        const saintMaloArray = betList.filter(elm => (elm.racecourse === "Saint Malo"))
        const salonDeProvenceArray = betList.filter(elm => (elm.racecourse === "Salon de Provence"))
        const sanSebastianArray = betList.filter(elm => (elm.racecourse === "San Sebastián"))
        const sanlucarArray = betList.filter(elm => (elm.racecourse === "Sanlucar"))
        const senonnesPouanceArray = betList.filter(elm => (elm.racecourse === "Senonnes-Pouance"))
        const strasbourgArray = betList.filter(elm => (elm.racecourse === "Strasbourg"))
        const tarbesArray = betList.filter(elm => (elm.racecourse === "Tarbes"))
        const toulouseArray = betList.filter(elm => (elm.racecourse === "Toulouse"))
        const vichyArray = betList.filter(elm => (elm.racecourse === "Vichy"))
        const vittelArray = betList.filter(elm => (elm.racecourse === "Vittel"))
        const zarzuelaArray = betList.filter(elm => (elm.racecourse === "Zarzuela"))
        

        //-----------------------BETS WIN ARRAY---------------------------------------------------------

        const aixLesBainsArrayWin = betList.filter(elm => (elm.racecourse === "Aix Les Bains") && (elm.status === "win"))
        const amiensArrayWin = betList.filter(elm => (elm.racecourse === "Amiens") && (elm.status === "win"))
        const angersArrayWin = betList.filter(elm => (elm.racecourse === "Angers") && (elm.status === "win"))
        const argentanArrayWin = betList.filter(elm => (elm.racecourse === "Argentan") && (elm.status === "win"))
        const bordeauxLeBouscatArrayWin = betList.filter(elm => (elm.racecourse === "Bordeaux Le Bouscat") && (elm.status === "win"))
        const cagnesSurMerArrayWin = betList.filter(elm => (elm.racecourse === "Cagnes Sur Mer") && (elm.status === "win"))
        const chantillyArrayWin = betList.filter(elm => (elm.racecourse === "Chantilly") && (elm.status === "win"))
        const chateaubriantArrayWin = betList.filter(elm => (elm.racecourse === "Chateaubriant") && (elm.status === "win"))
        const choletArrayWin = betList.filter(elm => (elm.racecourse === "Cholet") && (elm.status === "win"))
        const clairefontaineArrayWin = betList.filter(elm => (elm.racecourse === "Clairefontaine") && (elm.status === "win"))
        const compiegneArrayWin = betList.filter(elm => (elm.racecourse === "Compiegne") && (elm.status === "win"))
        const craonArrayWin = betList.filter(elm => (elm.racecourse === "Craon") && (elm.status === "win"))
        const daxArrayWin = betList.filter(elm => (elm.racecourse === "Dax") && (elm.status === "win"))
        const deauvilleArrayWin = betList.filter(elm => (elm.racecourse === "Deauville") && (elm.status === "win"))
        const dieppeArrayWin = betList.filter(elm => (elm.racecourse === "Dieppe") && (elm.status === "win"))
        const dosHermanasArrayWin = betList.filter(elm => (elm.racecourse === "Dos Hermanas") && (elm.status === "win"))
        const evreuxArrayWin = betList.filter(elm => (elm.racecourse === "Evreux") && (elm.status === "win"))
        const fontainebleauArrayWin = betList.filter(elm => (elm.racecourse === "Fontainebleau") && (elm.status === "win"))
        const laTesteDeBuchArrayWin = betList.filter(elm => (elm.racecourse === "La Teste de Buch") && (elm.status === "win"))
        const leliondangersArrayWin = betList.filter(elm => (elm.racecourse === "Le Lion d'Angers") && (elm.status === "win"))
        const lemansArrayWin = betList.filter(elm => (elm.racecourse === "Le Mans") && (elm.status === "win"))
        const letouquetArrayWin = betList.filter(elm => (elm.racecourse === "Le Touquet") && (elm.status === "win"))
        const lesSablesdOlonneArrayWin = betList.filter(elm => (elm.racecourse === "Les Sables D'Olonne") && (elm.status === "win"))
        const longchampArrayWin = betList.filter(elm => (elm.racecourse === "Longchamp") && (elm.status === "win"))
        const lyonLaSoieArrayWin = betList.filter(elm => (elm.racecourse === "Lyon La Soie") && (elm.status === "win"))
        const lyonParillyArrayWin = betList.filter(elm => (elm.racecourse === "Lyon Parilly") && (elm.status === "win"))
        const machecoulArrayWin = betList.filter(elm => (elm.racecourse === "Machecoul") && (elm.status === "win"))
        const marseilleBorelyArrayWin = betList.filter(elm => (elm.racecourse === "Marseille Borely") && (elm.status === "win"))
        const marseilleVivauxArrayWin = betList.filter(elm => (elm.racecourse === "Marseille Vivaux") && (elm.status === "win"))
        const meydanArrayWin = betList.filter(elm => (elm.racecourse === "Meydan") && (elm.status === "win"))
        const montDeMarsanArrayWin = betList.filter(elm => (elm.racecourse === "Mont de Marsan") && (elm.status === "win"))
        const moulinsArrayWin = betList.filter(elm => (elm.racecourse === "Moulins") && (elm.status === "win"))
        const nancyArrayWin = betList.filter(elm => (elm.racecourse === "Nancy") && (elm.status === "win"))
        const nantesArrayWin = betList.filter(elm => (elm.racecourse === "Nantes") && (elm.status === "win"))
        const pauArrayWin = betList.filter(elm => (elm.racecourse === "Pau") && (elm.status === "win"))
        const pinedaArrayWin = betList.filter(elm => (elm.racecourse === "Pineda") && (elm.status === "win"))
        const pornichetArrayWin = betList.filter(elm => (elm.racecourse === "Pornichet") && (elm.status === "win"))
        const saintCloudArrayWin = betList.filter(elm => (elm.racecourse === "Saint Cloud") && (elm.status === "win"))
        const saintMaloArrayWin = betList.filter(elm => (elm.racecourse === "Saint Malo") && (elm.status === "win"))
        const salonDeProvenceArrayWin = betList.filter(elm => (elm.racecourse === "Salon de Provence") && (elm.status === "win"))
        const sanSebastianArrayWin = betList.filter(elm => (elm.racecourse === "San Sebastián") && (elm.status === "win"))
        const sanlucarArrayWin = betList.filter(elm => (elm.racecourse === "Sanlucar") && (elm.status === "win"))
        const senonnesPouanceArrayWin = betList.filter(elm => (elm.racecourse === "Senonnes-Pouance") && (elm.status === "win"))
        const strasbourgArrayWin = betList.filter(elm => (elm.racecourse === "Strasbourg") && (elm.status === "win"))
        const tarbesArrayWin = betList.filter(elm => (elm.racecourse === "Tarbes") && (elm.status === "win"))
        const toulouseArrayWin = betList.filter(elm => (elm.racecourse === "Toulouse") && (elm.status === "win"))
        const vichyArrayWin = betList.filter(elm => (elm.racecourse === "Vichy") && (elm.status === "win"))
        const vittelArrayWin = betList.filter(elm => (elm.racecourse === "Vittel") && (elm.status === "win"))
        const zarzuelaArrayWin = betList.filter(elm => (elm.racecourse === "Zarzuela") && (elm.status === "win"))
        

        //--------------------BETS LOSS ARRAY---------------------------------------------------

        const aixLesBainsArrayLoss = betList.filter(elm => (elm.racecourse === "Aix Les Bains") && (elm.status === "loss"))
        const amiensArrayLoss = betList.filter(elm => (elm.racecourse === "Amiens") && (elm.status === "loss"))
        const angersArrayLoss = betList.filter(elm => (elm.racecourse === "Angers") && (elm.status === "loss"))
        const argentanArrayLoss = betList.filter(elm => (elm.racecourse === "Argentan") && (elm.status === "loss"))
        const bordeauxLeBouscatArrayLoss = betList.filter(elm => (elm.racecourse === "Bordeaux Le Bouscat") && (elm.status === "loss"))
        const cagnesSurMerArrayLoss = betList.filter(elm => (elm.racecourse === "Cagnes Sur Mer") && (elm.status === "loss"))
        const chantillyArrayLoss = betList.filter(elm => (elm.racecourse === "Chantilly") && (elm.status === "loss"))
        const chateaubriantArrayLoss = betList.filter(elm => (elm.racecourse === "Chateaubriant") && (elm.status === "loss"))
        const choletArrayLoss = betList.filter(elm => (elm.racecourse === "Cholet") && (elm.status === "loss"))
        const clairefontaineArrayLoss = betList.filter(elm => (elm.racecourse === "Clairefontaine") && (elm.status === "loss"))
        const compiegneArrayLoss = betList.filter(elm => (elm.racecourse === "Compiegne") && (elm.status === "loss"))
        const craonArrayLoss = betList.filter(elm => (elm.racecourse === "Craon") && (elm.status === "loss"))
        const daxArrayLoss = betList.filter(elm => (elm.racecourse === "Dax") && (elm.status === "loss"))
        const deauvilleArrayLoss = betList.filter(elm => (elm.racecourse === "Deauville") && (elm.status === "loss"))
        const dieppeArrayLoss = betList.filter(elm => (elm.racecourse === "Dieppe") && (elm.status === "loss"))
        const dosHermanasArrayLoss = betList.filter(elm => (elm.racecourse === "Dos Hermanas") && (elm.status === "loss"))
        const evreuxArrayLoss = betList.filter(elm => (elm.racecourse === "Evreux") && (elm.status === "loss"))
        const fontainebleauArrayLoss = betList.filter(elm => (elm.racecourse === "Fontainebleau") && (elm.status === "loss"))
        const laTesteDeBuchArrayLoss = betList.filter(elm => (elm.racecourse === "La Teste de Buch") && (elm.status === "loss"))
        const leliondangersArrayLoss = betList.filter(elm => (elm.racecourse === "Le Lion d'Angers") && (elm.status === "loss"))
        const lemansArrayLoss = betList.filter(elm => (elm.racecourse === "Le Mans") && (elm.status === "loss"))
        const letouquetArrayLoss = betList.filter(elm => (elm.racecourse === "Le Touquet") && (elm.status === "loss"))
        const lesSablesdOlonneArrayLoss = betList.filter(elm => (elm.racecourse === "Les Sables D'Olonne") && (elm.status === "loss"))
        const longchampArrayLoss = betList.filter(elm => (elm.racecourse === "Longchamp") && (elm.status === "loss"))
        const lyonLaSoieArrayLoss = betList.filter(elm => (elm.racecourse === "Lyon La Soie")  && (elm.status === "loss"))
        const lyonParillyArrayLoss = betList.filter(elm => (elm.racecourse === "Lyon Parilly") && (elm.status === "loss"))
        const machecoulArrayLoss = betList.filter(elm => (elm.racecourse === "Machecoul") && (elm.status === "loss"))
        const marseilleBorelyArrayLoss = betList.filter(elm => (elm.racecourse === "Marseille Borely") && (elm.status === "loss"))
        const marseilleVivauxArrayLoss = betList.filter(elm => (elm.racecourse === "Marseille Vivaux") && (elm.status === "loss"))
        const meydanArrayLoss = betList.filter(elm => (elm.racecourse === "Meydan") && (elm.status === "loss"))
        const montDeMarsanArrayLoss = betList.filter(elm => (elm.racecourse === "Mont de Marsan") && (elm.status === "loss"))
        const moulinsArrayLoss = betList.filter(elm => (elm.racecourse === "Moulins") && (elm.status === "loss"))
        const nancyArrayLoss = betList.filter(elm => (elm.racecourse === "Nancy") && (elm.status === "loss"))
        const nantesArrayLoss = betList.filter(elm => (elm.racecourse === "Nantes") && (elm.status === "loss"))
        const pauArrayLoss = betList.filter(elm => (elm.racecourse === "Pau") && (elm.status === "loss"))
        const pinedaArrayLoss = betList.filter(elm => (elm.racecourse === "Pineda") && (elm.status === "loss"))
        const pornichetArrayLoss = betList.filter(elm => (elm.racecourse === "Pornichet") && (elm.status === "loss"))
        const saintCloudArrayLoss = betList.filter(elm => (elm.racecourse === "Saint Cloud") && (elm.status === "loss"))
        const saintMaloArrayLoss = betList.filter(elm => (elm.racecourse === "Saint Malo") && (elm.status === "loss"))
        const salonDeProvenceArrayLoss = betList.filter(elm => (elm.racecourse === "Salon de Provence") && (elm.status === "loss"))
        const sanSebastianArrayLoss = betList.filter(elm => (elm.racecourse === "San Sebastián") && (elm.status === "loss"))
        const sanlucarArrayLoss = betList.filter(elm => (elm.racecourse === "Sanlucar") && (elm.status === "loss"))
        const senonnesPouanceArrayLoss = betList.filter(elm => (elm.racecourse === "Senonnes-Pouance") && (elm.status === "loss"))
        const strasbourgArrayLoss = betList.filter(elm => (elm.racecourse === "Strasbourg") && (elm.status === "loss"))
        const tarbesArrayLoss = betList.filter(elm => (elm.racecourse === "Tarbes") && (elm.status === "loss"))
        const toulouseArrayLoss = betList.filter(elm => (elm.racecourse === "Toulouse") && (elm.status === "loss"))
        const vichyArrayLoss = betList.filter(elm => (elm.racecourse === "Vichy") && (elm.status === "loss"))
        const vittelArrayLoss = betList.filter(elm => (elm.racecourse === "Vittel") && (elm.status === "loss"))
        const zarzuelaArrayLoss = betList.filter(elm => (elm.racecourse === "Zarzuela") && (elm.status === "loss"))
        

        //-------------------BETS VOID ARRAY-------------------------------------------------

        const aixLesBainsArrayVoid = betList.filter(elm => (elm.racecourse === "Aix Les Bains") && (elm.status === "void"))
        const amiensArrayVoid = betList.filter(elm => (elm.racecourse === "Amiens") && (elm.status === "void"))
        const angersArrayVoid = betList.filter(elm => (elm.racecourse === "Angers") && (elm.status === "void"))
        const argentanArrayVoid = betList.filter(elm => (elm.racecourse === "Argentan") && (elm.status === "void"))
        const bordeauxLeBouscatArrayVoid = betList.filter(elm => (elm.racecourse === "Bordeaux Le Bouscat") && (elm.status === "void"))
        const cagnesSurMerArrayVoid = betList.filter(elm => (elm.racecourse === "Cagnes Sur Mer") && (elm.status === "void"))
        const chantillyArrayVoid = betList.filter(elm => (elm.racecourse === "Chantilly") && (elm.status === "void"))
        const chateaubriantArrayVoid = betList.filter(elm => (elm.racecourse === "Chateaubriant") && (elm.status === "void"))
        const choletArrayVoid = betList.filter(elm => (elm.racecourse === "Cholet") && (elm.status === "void"))
        const clairefontaineArrayVoid = betList.filter(elm => (elm.racecourse === "Clairefontaine") && (elm.status === "void"))
        const compiegneArrayVoid = betList.filter(elm => (elm.racecourse === "Compiegne") && (elm.status === "void"))
        const craonArrayVoid = betList.filter(elm => (elm.racecourse === "Craon") && (elm.status === "void"))
        const daxArrayVoid = betList.filter(elm => (elm.racecourse === "Dax") && (elm.status === "void"))
        const deauvilleArrayVoid = betList.filter(elm => (elm.racecourse === "Deauville") && (elm.status === "void"))
        const dieppeArrayVoid = betList.filter(elm => (elm.racecourse === "Dieppe") && (elm.status === "void"))
        const dosHermanasArrayVoid = betList.filter(elm => (elm.racecourse === "Dos Hermanas") && (elm.status === "void"))
        const evreuxArrayVoid = betList.filter(elm => (elm.racecourse === "Evreux") && (elm.status === "void"))
        const fontainebleauArrayVoid = betList.filter(elm => (elm.racecourse === "Fontainebleau") && (elm.status === "void"))
        const laTesteDeBuchArrayVoid = betList.filter(elm => (elm.racecourse === "La Teste de Buch") && (elm.status === "void"))
        const leliondangersArrayVoid = betList.filter(elm => (elm.racecourse === "Le Lion d'Angers") && (elm.status === "void"))
        const lemansArrayVoid = betList.filter(elm => (elm.racecourse === "Le Mans") && (elm.status === "void"))
        const letouquetArrayVoid = betList.filter(elm => (elm.racecourse === "Le Touquet") && (elm.status === "void"))
        const lesSablesdOlonneArrayVoid = betList.filter(elm => (elm.racecourse === "Les Sables D'Olonne") && (elm.status === "void"))
        const longchampArrayVoid = betList.filter(elm => (elm.racecourse === "Longchamp") && (elm.status === "void"))
        const lyonLaSoieArrayVoid = betList.filter(elm => (elm.racecourse === "Lyon La Soie")  && (elm.status === "void"))
        const lyonParillyArrayVoid = betList.filter(elm => (elm.racecourse === "Lyon Parilly") && (elm.status === "void"))
        const machecoulArrayVoid = betList.filter(elm => (elm.racecourse === "Machecoul") && (elm.status === "void"))
        const marseilleBorelyArrayVoid = betList.filter(elm => (elm.racecourse === "Marseille Borely") && (elm.status === "void"))
        const marseilleVivauxArrayVoid = betList.filter(elm => (elm.racecourse === "Marseille Vivaux") && (elm.status === "void")) 
        const meydanArrayVoid = betList.filter(elm => (elm.racecourse === "Meydan") && (elm.status === "void"))
        const montDeMarsanArrayVoid = betList.filter(elm => (elm.racecourse === "Mont de Marsan") && (elm.status === "void"))
        const moulinsArrayVoid = betList.filter(elm => (elm.racecourse === "Moulins") && (elm.status === "void"))
        const nancyArrayVoid = betList.filter(elm => (elm.racecourse === "Nancy") && (elm.status === "void"))
        const nantesArrayVoid = betList.filter(elm => (elm.racecourse === "Nantes") && (elm.status === "void"))
        const pauArrayVoid = betList.filter(elm => (elm.racecourse === "Pau") && (elm.status === "void"))
        const pinedaArrayVoid = betList.filter(elm => (elm.racecourse === "Pineda") && (elm.status === "void"))
        const pornichetArrayVoid = betList.filter(elm => (elm.racecourse === "Pornichet") && (elm.status === "void"))
        const saintCloudArrayVoid = betList.filter(elm => (elm.racecourse === "Saint Cloud") && (elm.status === "void"))
        const saintMaloArrayVoid = betList.filter(elm => (elm.racecourse === "Saint Malo") && (elm.status === "void"))
        const salonDeProvenceArrayVoid = betList.filter(elm => (elm.racecourse === "Salon de Provence") && (elm.status === "void"))
        const sanSebastianArrayVoid = betList.filter(elm => (elm.racecourse === "San Sebastián") && (elm.status === "void"))
        const sanlucarArrayVoid = betList.filter(elm => (elm.racecourse === "Sanlucar") && (elm.status === "void"))
        const senonnesPouanceArrayVoid = betList.filter(elm => (elm.racecourse === "Senonnes-Pouance") && (elm.status === "void"))
        const strasbourgArrayVoid = betList.filter(elm => (elm.racecourse === "Strasbourg") && (elm.status === "void"))
        const tarbesArrayVoid = betList.filter(elm => (elm.racecourse === "Tarbes") && (elm.status === "void"))
        const toulouseArrayVoid = betList.filter(elm => (elm.racecourse === "Toulouse") && (elm.status === "void"))
        const vichyArrayVoid = betList.filter(elm => (elm.racecourse === "Vichy") && (elm.status === "void"))
        const vittelArrayVoid = betList.filter(elm => (elm.racecourse === "Vittel") && (elm.status === "void"))
        const zarzuelaArrayVoid = betList.filter(elm => (elm.racecourse === "Zarzuela") && (elm.status === "void"))
        

        //---------------------STAKE----------------------------------------------------------

        const aixLesBainsArrayStake = aixLesBainsArray.reduce((acc, elm) => {
            return acc + elm.stake},0)
        const amiensArrayStake = amiensArray.reduce((acc, elm) => {
            return acc + elm.stake},0)
        const angersArrayStake = angersArray.reduce((acc, elm) => {
            return acc + elm.stake},0)
        const argentanArrayStake = argentanArray.reduce((acc, elm) => {
            return acc + elm.stake},0)
        const bordeauxLeBouscatArrayStake = bordeauxLeBouscatArray.reduce((acc, elm) => {
            return acc + elm.stake},0)
        const cagnesSurMerArrayStake = cagnesSurMerArray.reduce((acc, elm) => {
            return acc + elm.stake},0)
        const deauvilleArrayStake = deauvilleArray.reduce((acc, elm) => {
            return acc + elm.stake},0)
        const chantillyArrayStake = chantillyArray.reduce((acc, elm) => {
            return acc + elm.stake},0)
        const chateaubriantArrayStake = chateaubriantArray.reduce((acc, elm) => {
            return acc + elm.stake},0)
        const choletArrayStake = choletArray.reduce((acc, elm) => {
            return acc + elm.stake},0)
        const clairefontaineArrayStake = clairefontaineArray.reduce((acc, elm) => {
            return acc + elm.stake},0)
        const compiegneArrayStake = compiegneArray.reduce((acc, elm) => {
            return acc + elm.stake},0)
        const craonArrayStake = craonArray.reduce((acc, elm) => {
            return acc + elm.stake},0)
        const daxArrayStake = daxArray.reduce((acc, elm) => {
            return acc + elm.stake},0)
        const dieppeArrayStake = dieppeArray.reduce((acc, elm) => {
            return acc + elm.stake},0)
        const dosHermanasArrayStake = dosHermanasArray.reduce((acc, elm) => {
            return acc + elm.stake},0)
        const evreuxArrayStake = evreuxArray.reduce((acc, elm) => {
            return acc + elm.stake},0)
        const fontainebleauArrayStake = fontainebleauArray.reduce((acc, elm) => {
            return acc + elm.stake},0)
        const laTesteDeBuchArrayStake = laTesteDeBuchArray.reduce((acc, elm) => {
            return acc + elm.stake},0)
        const leliondangersArrayStake = leliondangersArray.reduce((acc, elm) => {
            return acc + elm.stake},0)
        const lemansArrayStake = lemansArray.reduce((acc, elm) => {
            return acc + elm.stake},0)
        const letouquetArrayStake = letouquetArray.reduce((acc, elm) => {
            return acc + elm.stake},0)
        const lesSablesdOlonneArrayStake = lesSablesdOlonneArray.reduce((acc, elm) => {
            return acc + elm.stake},0)
        const longchampArrayStake = longchampArray.reduce((acc, elm) => {
            return acc + elm.stake},0)
        const lyonLaSoieArrayStake = lyonLaSoieArray.reduce((acc, elm) => {
            return acc + elm.stake},0)
        const lyonParillyArrayStake = lyonParillyArray.reduce((acc, elm) => {
            return acc + elm.stake},0)
        const machecoulArrayStake = machecoulArray.reduce((acc, elm) => {
            return acc + elm.stake},0)
        const marseilleBorelyArrayStake = marseilleBorelyArray.reduce((acc, elm) => {
            return acc + elm.stake},0)
        const marseilleVivauxArrayStake = marseilleVivauxArray.reduce((acc, elm) => {
            return acc + elm.stake},0)
        const meydanArrayStake = meydanArray.reduce((acc, elm) => {
            return acc + elm.stake},0)
        const montDeMarsanArrayStake = montDeMarsanArray.reduce((acc, elm) => {
            return acc + elm.stake},0)
        const moulinsArrayStake = moulinsArray.reduce((acc, elm) => {
            return acc + elm.stake},0)
        const nancyArrayStake = nancyArray.reduce((acc, elm) => {
            return acc + elm.stake},0)
        const nantesArrayStake = nantesArray.reduce((acc, elm) => {
            return acc + elm.stake},0)
        const pauArrayStake = pauArray.reduce((acc, elm) => {
            return acc + elm.stake},0)
        const pinedaArrayStake = pinedaArray.reduce((acc, elm) => {
            return acc + elm.stake},0)
        const pornichetArrayStake = pornichetArray.reduce((acc, elm) => {
            return acc + elm.stake},0)
        const saintCloudArrayStake = saintCloudArray.reduce((acc, elm) => {
            return acc + elm.stake},0)
        const saintMaloArrayStake = saintMaloArray.reduce((acc, elm) => {
            return acc + elm.stake},0)
        const salonDeProvenceArrayStake = salonDeProvenceArray.reduce((acc, elm) => {
            return acc + elm.stake},0)
        const sanSebastianArrayStake = sanSebastianArray.reduce((acc, elm) => {
            return acc + elm.stake},0)
        const sanlucarArrayStake = sanlucarArray.reduce((acc, elm) => {
            return acc + elm.stake},0)
        const senonnesPouanceArrayStake = senonnesPouanceArray.reduce((acc, elm) => {
            return acc + elm.stake},0)
        const strasbourgArrayStake = strasbourgArray.reduce((acc, elm) => {
            return acc + elm.stake},0)
        const tarbesArrayStake = tarbesArray.reduce((acc, elm) => {
            return acc + elm.stake},0)
        const toulouseArrayStake = toulouseArray.reduce((acc, elm) => {
            return acc + elm.stake},0)
        const vichyArrayStake = vichyArray.reduce((acc, elm) => {
            return acc + elm.stake},0)
        const vittelArrayStake = vittelArray.reduce((acc, elm) => {
            return acc + elm.stake},0)
        const zarzuelaArrayStake = zarzuelaArray.reduce((acc, elm) => {
            return acc + elm.stake},0)
        

        //---------------------PROFIT----------------------------------------------------

        const aixLesBainsArrayProfit = aixLesBainsArray.reduce((acc, elm) => {
            return acc + elm.profit},0)
        const amiensArrayProfit = amiensArray.reduce((acc, elm) => {
            return acc + elm.profit},0)
        const angersArrayProfit = angersArray.reduce((acc, elm) => {
            return acc + elm.profit},0)
        const argentanArrayProfit = argentanArray.reduce((acc, elm) => {
            return acc + elm.profit},0)
        const bordeauxLeBouscatArrayProfit = bordeauxLeBouscatArray.reduce((acc, elm) => {
            return acc + elm.profit},0)
        const cagnesSurMerArrayProfit = cagnesSurMerArray.reduce((acc, elm) => {
            return acc + elm.profit},0)
        const deauvilleArrayProfit = deauvilleArray.reduce((acc, elm) => {
            return acc + elm.profit},0)
        const chantillyArrayProfit = chantillyArray.reduce((acc, elm) => {
            return acc + elm.profit},0)
        const chateaubriantArrayProfit = chateaubriantArray.reduce((acc, elm) => {
            return acc + elm.profit},0)
        const choletArrayProfit = choletArray.reduce((acc, elm) => {
            return acc + elm.profit},0)
        const clairefontaineArrayProfit = clairefontaineArray.reduce((acc, elm) => {
            return acc + elm.profit},0)
        const compiegneArrayProfit = compiegneArray.reduce((acc, elm) => {
            return acc + elm.profit},0)
        const craonArrayProfit = craonArray.reduce((acc, elm) => {
            return acc + elm.profit},0)
        const daxArrayProfit = daxArray.reduce((acc, elm) => {
            return acc + elm.profit},0)
        const dieppeArrayProfit = dieppeArray.reduce((acc, elm) => {
            return acc + elm.profit},0)
        const dosHermanasArrayProfit = dosHermanasArray.reduce((acc, elm) => {
            return acc + elm.profit},0)
        const evreuxArrayProfit = evreuxArray.reduce((acc, elm) => {
            return acc + elm.profit},0)
        const fontainebleauArrayProfit = fontainebleauArray.reduce((acc, elm) => {
            return acc + elm.profit},0)
        const laTesteDeBuchArrayProfit = laTesteDeBuchArray.reduce((acc, elm) => {
            return acc + elm.profit},0)
        const leliondangersArrayProfit = leliondangersArray.reduce((acc, elm) => {
            return acc + elm.profit},0)
        const lemansArrayProfit = lemansArray.reduce((acc, elm) => {
            return acc + elm.profit},0)
        const letouquetArrayProfit = letouquetArray.reduce((acc, elm) => {
            return acc + elm.profit},0)
        const lesSablesdOlonneArrayProfit = lesSablesdOlonneArray.reduce((acc, elm) => {
            return acc + elm.profit},0)
        const longchampArrayProfit = longchampArray.reduce((acc, elm) => {
            return acc + elm.profit},0)
        const lyonLaSoieArrayProfit = lyonLaSoieArray.reduce((acc, elm) => {
            return acc + elm.profit},0)
        const lyonParillyArrayProfit = lyonParillyArray.reduce((acc, elm) => {
            return acc + elm.profit},0)
        const machecoulArrayProfit = machecoulArray.reduce((acc, elm) => {
            return acc + elm.profit},0)
        const marseilleBorelyArrayProfit = marseilleBorelyArray.reduce((acc, elm) => {
            return acc + elm.profit},0)
        const marseilleVivauxArrayProfit = marseilleVivauxArray.reduce((acc, elm) => {
            return acc + elm.profit},0)
        const meydanArrayProfit = meydanArray.reduce((acc, elm) => {
            return acc + elm.profit},0)
        const montDeMarsanArrayProfit = montDeMarsanArray.reduce((acc, elm) => {
            return acc + elm.profit},0)
        const moulinsArrayProfit = moulinsArray.reduce((acc, elm) => {
            return acc + elm.profit},0)
        const nancyArrayProfit = nancyArray.reduce((acc, elm) => {
            return acc + elm.profit},0)
        const nantesArrayProfit = nantesArray.reduce((acc, elm) => {
            return acc + elm.profit},0)
        const pauArrayProfit = pauArray.reduce((acc, elm) => {
            return acc + elm.profit},0)
        const pinedaArrayProfit = pinedaArray.reduce((acc, elm) => {
            return acc + elm.profit},0)
        const pornichetArrayProfit = pornichetArray.reduce((acc, elm) => {
            return acc + elm.profit},0)
        const saintCloudArrayProfit = saintCloudArray.reduce((acc, elm) => {
            return acc + elm.profit},0)
        const saintMaloArrayProfit = saintMaloArray.reduce((acc, elm) => {
            return acc + elm.profit},0)
        const salonDeProvenceArrayProfit = salonDeProvenceArray.reduce((acc, elm) => {
            return acc + elm.profit},0)
        const sanSebastianArrayProfit = sanSebastianArray.reduce((acc, elm) => {
            return acc + elm.profit},0)
        const sanlucarArrayProfit = sanlucarArray.reduce((acc, elm) => {
            return acc + elm.profit},0)
        const senonnesPouanceArrayProfit = senonnesPouanceArray.reduce((acc, elm) => {
            return acc + elm.profit},0)
        const strasbourgArrayProfit = strasbourgArray.reduce((acc, elm) => {
            return acc + elm.profit},0)
        const tarbesArrayProfit = tarbesArray.reduce((acc, elm) => {
            return acc + elm.profit},0)
        const toulouseArrayProfit = toulouseArray.reduce((acc, elm) => {
            return acc + elm.profit},0)
        const vichyArrayProfit = vichyArray.reduce((acc, elm) => {
            return acc + elm.profit},0)
        const vittelArrayProfit = vittelArray.reduce((acc, elm) => {
            return acc + elm.profit},0)
        const zarzuelaArrayProfit = zarzuelaArray.reduce((acc, elm) => {
            return acc + elm.profit},0)
        

        updateRacecourse({
            aixLesBainsObj : {
                bets: aixLesBainsArray.length,
                wins: aixLesBainsArrayWin.length,
                loss: aixLesBainsArrayLoss.length,
                void: aixLesBainsArrayVoid.length,
                percent: ((aixLesBainsArrayWin.length / (aixLesBainsArrayLoss.length + aixLesBainsArrayWin.length)) * 100).toFixed(2),
                averageStake: (aixLesBainsArrayStake / aixLesBainsArray.length).toFixed(2),
                totalUds: aixLesBainsArrayStake.toFixed(2),
                profitUds: aixLesBainsArrayProfit.toFixed(2),
                yield: ((aixLesBainsArrayProfit * 100) / aixLesBainsArrayStake).toFixed(2),
                racecourse: "Aix Les Bains"
            },
            amiensObj : {
                bets: amiensArray.length,
                wins: amiensArrayWin.length,
                loss: amiensArrayLoss.length,
                void: amiensArrayVoid.length,
                percent: ((amiensArrayWin.length / (amiensArrayLoss.length + amiensArrayWin.length)) * 100).toFixed(2),
                averageStake: (amiensArrayStake / amiensArray.length).toFixed(2),
                totalUds: amiensArrayStake.toFixed(2),
                profitUds: amiensArrayProfit.toFixed(2),
                yield: ((amiensArrayProfit * 100) / amiensArrayStake).toFixed(2),
                racecourse: "Amiens"
            },
            angersObj : {
                bets: angersArray.length,
                wins: angersArrayWin.length,
                loss: angersArrayLoss.length,
                void: angersArrayVoid.length,
                percent: ((angersArrayWin.length / (angersArrayLoss.length + angersArrayWin.length)) * 100).toFixed(2),
                averageStake: (angersArrayStake / angersArray.length).toFixed(2),
                totalUds: angersArrayStake.toFixed(2),
                profitUds: angersArrayProfit.toFixed(2),
                yield: ((angersArrayProfit * 100) / angersArrayStake).toFixed(2),
                racecourse: "Angers"
            },
            argentanObj : {
                bets: argentanArray.length,
                wins: argentanArrayWin.length,
                loss: argentanArrayLoss.length,
                void: argentanArrayVoid.length,
                percent: ((argentanArrayWin.length / (argentanArrayLoss.length + argentanArrayWin.length)) * 100).toFixed(2),
                averageStake: (argentanArrayStake / argentanArray.length).toFixed(2),
                totalUds: argentanArrayStake.toFixed(2),
                profitUds: argentanArrayProfit.toFixed(2),
                yield: ((argentanArrayProfit * 100) / argentanArrayStake).toFixed(2),
                racecourse: "Argentan"
            },
            bordeauxLeBouscatObj : {
                bets: bordeauxLeBouscatArray.length,
                wins: bordeauxLeBouscatArrayWin.length,
                loss: bordeauxLeBouscatArrayLoss.length,
                void: bordeauxLeBouscatArrayVoid.length,
                percent: ((bordeauxLeBouscatArrayWin.length / (bordeauxLeBouscatArrayLoss.length + bordeauxLeBouscatArrayWin.length)) * 100).toFixed(2),
                averageStake: (bordeauxLeBouscatArrayStake / bordeauxLeBouscatArray.length).toFixed(2),
                totalUds: bordeauxLeBouscatArrayStake.toFixed(2),
                profitUds: bordeauxLeBouscatArrayProfit.toFixed(2),
                yield: ((bordeauxLeBouscatArrayProfit * 100) / bordeauxLeBouscatArrayStake).toFixed(2),
                racecourse: "Bordeaux Le Bouscat"
            },
            cagnesSurMerObj : {
                bets: cagnesSurMerArray.length,
                wins: cagnesSurMerArrayWin.length,
                loss: cagnesSurMerArrayLoss.length,
                void: cagnesSurMerArrayVoid.length,
                percent: ((cagnesSurMerArrayWin.length / (cagnesSurMerArrayLoss.length + cagnesSurMerArrayWin.length)) * 100).toFixed(2),
                averageStake: (cagnesSurMerArrayStake / cagnesSurMerArray.length).toFixed(2),
                totalUds: cagnesSurMerArrayStake.toFixed(2),
                profitUds: cagnesSurMerArrayProfit.toFixed(2),
                yield: ((cagnesSurMerArrayProfit * 100) / cagnesSurMerArrayStake).toFixed(2),
                racecourse: "Cagnes Sur Mer"
            },
            chantillyObj : {
                bets: chantillyArray.length,
                wins: chantillyArrayWin.length,
                loss: chantillyArrayLoss.length,
                void: chantillyArrayVoid.length,
                percent: ((chantillyArrayWin.length / (chantillyArrayLoss.length + chantillyArrayWin.length)) * 100).toFixed(2),
                averageStake: (chantillyArrayStake / chantillyArray.length).toFixed(2),
                totalUds: chantillyArrayStake.toFixed(2),
                profitUds: chantillyArrayProfit.toFixed(2),
                yield: ((chantillyArrayProfit * 100) / chantillyArrayStake).toFixed(2),
                racecourse: "Chantilly"
            },
            chateaubriantObj : {
                bets: chateaubriantArray.length,
                wins: chateaubriantArrayWin.length,
                loss: chateaubriantArrayLoss.length,
                void: chateaubriantArrayVoid.length,
                percent: ((chateaubriantArrayWin.length / (chateaubriantArrayLoss.length + chateaubriantArrayWin.length)) * 100).toFixed(2),
                averageStake: (chateaubriantArrayStake / chateaubriantArray.length).toFixed(2),
                totalUds: chateaubriantArrayStake.toFixed(2),
                profitUds: chateaubriantArrayProfit.toFixed(2),
                yield: ((chateaubriantArrayProfit * 100) / chateaubriantArrayStake).toFixed(2),
                racecourse: "Chateaubriant"
            },
            choletObj : {
                bets: choletArray.length,
                wins: choletArrayWin.length,
                loss: choletArrayLoss.length,
                void: choletArrayVoid.length,
                percent: ((choletArrayWin.length / (choletArrayLoss.length + choletArrayWin.length)) * 100).toFixed(2),
                averageStake: (choletArrayStake / choletArray.length).toFixed(2),
                totalUds: choletArrayStake.toFixed(2),
                profitUds: choletArrayProfit.toFixed(2),
                yield: ((choletArrayProfit * 100) / choletArrayStake).toFixed(2),
                racecourse: "Cholet"
            },
            clairefontaineObj : {
                bets: clairefontaineArray.length,
                wins: clairefontaineArrayWin.length,
                loss: clairefontaineArrayLoss.length,
                void: clairefontaineArrayVoid.length,
                percent: ((clairefontaineArrayWin.length / (clairefontaineArrayLoss.length + clairefontaineArrayWin.length)) * 100).toFixed(2),
                averageStake: (clairefontaineArrayStake / clairefontaineArray.length).toFixed(2),
                totalUds: clairefontaineArrayStake.toFixed(2),
                profitUds: clairefontaineArrayProfit.toFixed(2),
                yield: ((clairefontaineArrayProfit * 100) / clairefontaineArrayStake).toFixed(2),
                racecourse: "Clairefontaine"
            },
            compiegneObj : {
                bets: compiegneArray.length,
                wins: compiegneArrayWin.length,
                loss: compiegneArrayLoss.length,
                void: compiegneArrayVoid.length,
                percent: ((compiegneArrayWin.length / (compiegneArrayLoss.length + compiegneArrayWin.length)) * 100).toFixed(2),
                averageStake: (compiegneArrayStake / compiegneArray.length).toFixed(2),
                totalUds: compiegneArrayStake.toFixed(2),
                profitUds: compiegneArrayProfit.toFixed(2),
                yield: ((compiegneArrayProfit * 100) / compiegneArrayStake).toFixed(2),
                racecourse: "Compiegne"
            },
            craonObj : {
                bets: craonArray.length,
                wins: craonArrayWin.length,
                loss: craonArrayLoss.length,
                void: craonArrayVoid.length,
                percent: ((craonArrayWin.length / (craonArrayLoss.length + craonArrayWin.length)) * 100).toFixed(2),
                averageStake: (craonArrayStake / craonArray.length).toFixed(2),
                totalUds: craonArrayStake.toFixed(2),
                profitUds: craonArrayProfit.toFixed(2),
                yield: ((craonArrayProfit * 100) / craonArrayStake).toFixed(2),
                racecourse: "Craon"
            },
            daxObj : {
                bets: daxArray.length,
                wins: daxArrayWin.length,
                loss: daxArrayLoss.length,
                void: daxArrayVoid.length,
                percent: ((daxArrayWin.length / (daxArrayLoss.length + daxArrayWin.length)) * 100).toFixed(2),
                averageStake: (daxArrayStake / daxArray.length).toFixed(2),
                totalUds: daxArrayStake.toFixed(2),
                profitUds: daxArrayProfit.toFixed(2),
                yield: ((daxArrayProfit * 100) / daxArrayStake).toFixed(2),
                racecourse: "Dax"
            },
            deauvilleObj : {
                bets: deauvilleArray.length,
                wins: deauvilleArrayWin.length,
                loss: deauvilleArrayLoss.length,
                void: deauvilleArrayVoid.length,
                percent: ((deauvilleArrayWin.length / (deauvilleArrayLoss.length + deauvilleArrayWin.length)) * 100).toFixed(2),
                averageStake: (deauvilleArrayStake / deauvilleArray.length).toFixed(2),
                totalUds: deauvilleArrayStake.toFixed(2),
                profitUds: deauvilleArrayProfit.toFixed(2),
                yield: ((deauvilleArrayProfit * 100) / deauvilleArrayStake).toFixed(2),
                racecourse: "Deauville"
            },
            dieppeObj : {
                bets: dieppeArray.length,
                wins: dieppeArrayWin.length,
                loss: dieppeArrayLoss.length,
                void: dieppeArrayVoid.length,
                percent: ((dieppeArrayWin.length / (dieppeArrayLoss.length + dieppeArrayWin.length)) * 100).toFixed(2),
                averageStake: (dieppeArrayStake / dieppeArray.length).toFixed(2),
                totalUds: dieppeArrayStake.toFixed(2),
                profitUds: dieppeArrayProfit.toFixed(2),
                yield: ((dieppeArrayProfit * 100) / dieppeArrayStake).toFixed(2),
                racecourse: "Dieppe"
            },
            dosHermanasObj : {
                bets: dosHermanasArray.length,
                wins: dosHermanasArrayWin.length,
                loss: dosHermanasArrayLoss.length,
                void: dosHermanasArrayVoid.length,
                percent: ((dosHermanasArrayWin.length / (dosHermanasArrayLoss.length + dosHermanasArrayWin.length)) * 100).toFixed(2),
                averageStake: (dosHermanasArrayStake / dosHermanasArray.length).toFixed(2),
                totalUds: dosHermanasArrayStake.toFixed(2),
                profitUds: dosHermanasArrayProfit.toFixed(2),
                yield: ((dosHermanasArrayProfit * 100) / dosHermanasArrayStake).toFixed(2),
                racecourse: "Dos Hermanas"
            },
            evreuxObj : {
                bets: evreuxArray.length,
                wins: evreuxArrayWin.length,
                loss: evreuxArrayLoss.length,
                void: evreuxArrayVoid.length,
                percent: ((evreuxArrayWin.length / (evreuxArrayLoss.length + evreuxArrayWin.length)) * 100).toFixed(2),
                averageStake: (evreuxArrayStake / evreuxArray.length).toFixed(2),
                totalUds: evreuxArrayStake.toFixed(2),
                profitUds: evreuxArrayProfit.toFixed(2),
                yield: ((evreuxArrayProfit * 100) / evreuxArrayStake).toFixed(2),
                racecourse: "Evreux"
            },
            fontainebleauObj : {
                bets: fontainebleauArray.length,
                wins: fontainebleauArrayWin.length,
                loss: fontainebleauArrayLoss.length,
                void: fontainebleauArrayVoid.length,
                percent: ((fontainebleauArrayWin.length / (fontainebleauArrayLoss.length + fontainebleauArrayWin.length)) * 100).toFixed(2),
                averageStake: (fontainebleauArrayStake / fontainebleauArray.length).toFixed(2),
                totalUds: fontainebleauArrayStake.toFixed(2),
                profitUds: fontainebleauArrayProfit.toFixed(2),
                yield: ((fontainebleauArrayProfit * 100) / fontainebleauArrayStake).toFixed(2),
                racecourse: "Fontainebleau"
            },
            laTesteDeBuchObj : {
                bets: laTesteDeBuchArray.length,
                wins: laTesteDeBuchArrayWin.length,
                loss: laTesteDeBuchArrayLoss.length,
                void: laTesteDeBuchArrayVoid.length,
                percent: ((laTesteDeBuchArrayWin.length / (laTesteDeBuchArrayLoss.length + laTesteDeBuchArrayWin.length)) * 100).toFixed(2),
                averageStake: (laTesteDeBuchArrayStake / laTesteDeBuchArray.length).toFixed(2),
                totalUds: laTesteDeBuchArrayStake.toFixed(2),
                profitUds: laTesteDeBuchArrayProfit.toFixed(2),
                yield: ((laTesteDeBuchArrayProfit * 100) / laTesteDeBuchArrayStake).toFixed(2),
                racecourse: "La Teste de Buch"
            },
            leliondangersObj : {
                bets: leliondangersArray.length,
                wins: leliondangersArrayWin.length,
                loss: leliondangersArrayLoss.length,
                void: leliondangersArrayVoid.length,
                percent: ((leliondangersArrayWin.length / (leliondangersArrayLoss.length + leliondangersArrayWin.length)) * 100).toFixed(2),
                averageStake: (leliondangersArrayStake / leliondangersArray.length).toFixed(2),
                totalUds: leliondangersArrayStake.toFixed(2),
                profitUds: leliondangersArrayProfit.toFixed(2),
                yield: ((leliondangersArrayProfit * 100) / leliondangersArrayStake).toFixed(2),
                racecourse: "Le Lion d'Angers"
            },
            lemansObj : {
                bets: lemansArray.length,
                wins: lemansArrayWin.length,
                loss: lemansArrayLoss.length,
                void: lemansArrayVoid.length,
                percent: ((lemansArrayWin.length / (lemansArrayLoss.length + lemansArrayWin.length)) * 100).toFixed(2),
                averageStake: (lemansArrayStake / lemansArray.length).toFixed(2),
                totalUds: lemansArrayStake.toFixed(2),
                profitUds: lemansArrayProfit.toFixed(2),
                yield: ((lemansArrayProfit * 100) / lemansArrayStake).toFixed(2),
                racecourse: "Le Mans"
            },
            letouquetObj : {
                bets: letouquetArray.length,
                wins: letouquetArrayWin.length,
                loss: letouquetArrayLoss.length,
                void: letouquetArrayVoid.length,
                percent: ((letouquetArrayWin.length / (letouquetArrayLoss.length + letouquetArrayWin.length)) * 100).toFixed(2),
                averageStake: (letouquetArrayStake / letouquetArray.length).toFixed(2),
                totalUds: letouquetArrayStake.toFixed(2),
                profitUds: letouquetArrayProfit.toFixed(2),
                yield: ((letouquetArrayProfit * 100) / letouquetArrayStake).toFixed(2),
                racecourse: "Le Touquet"
            },
            lesSablesdOlonneObj : {
                bets: lesSablesdOlonneArray.length,
                wins: lesSablesdOlonneArrayWin.length,
                loss: lesSablesdOlonneArrayLoss.length,
                void: lesSablesdOlonneArrayVoid.length,
                percent: ((lesSablesdOlonneArrayWin.length / (lesSablesdOlonneArrayLoss.length + lesSablesdOlonneArrayWin.length)) * 100).toFixed(2),
                averageStake: (lesSablesdOlonneArrayStake / lesSablesdOlonneArray.length).toFixed(2),
                totalUds: lesSablesdOlonneArrayStake.toFixed(2),
                profitUds: lesSablesdOlonneArrayProfit.toFixed(2),
                yield: ((lesSablesdOlonneArrayProfit * 100) / lesSablesdOlonneArrayStake).toFixed(2),
                racecourse: "Les Sables d'Olonne"
            },
            longchampObj : {
                bets: longchampArray.length,
                wins: longchampArrayWin.length,
                loss: longchampArrayLoss.length,
                void: longchampArrayVoid.length,
                percent: ((longchampArrayWin.length / (longchampArrayLoss.length + longchampArrayWin.length)) * 100).toFixed(2),
                averageStake: (longchampArrayStake / longchampArray.length).toFixed(2),
                totalUds: longchampArrayStake.toFixed(2),
                profitUds: longchampArrayProfit.toFixed(2),
                yield: ((longchampArrayProfit * 100) / longchampArrayStake).toFixed(2),
                racecourse: "Longchamp"
            },
            lyonLaSoieObj : {
                bets: lyonLaSoieArray.length,
                wins: lyonLaSoieArrayWin.length,
                loss: lyonLaSoieArrayLoss.length,
                void: lyonLaSoieArrayVoid.length,
                percent: ((lyonLaSoieArrayWin.length / (lyonLaSoieArrayLoss.length + lyonLaSoieArrayWin.length)) * 100).toFixed(2),
                averageStake: (lyonLaSoieArrayStake / lyonLaSoieArray.length).toFixed(2),
                totalUds: lyonLaSoieArrayStake.toFixed(2),
                profitUds: lyonLaSoieArrayProfit.toFixed(2),
                yield: ((lyonLaSoieArrayProfit * 100) / lyonLaSoieArrayStake).toFixed(2),
                racecourse: "Lyon La Soie"
            },
            lyonParillyObj : {
                bets: lyonParillyArray.length,
                wins: lyonParillyArrayWin.length,
                loss: lyonParillyArrayLoss.length,
                void: lyonParillyArrayVoid.length,
                percent: ((lyonParillyArrayWin.length / (lyonParillyArrayLoss.length + lyonParillyArrayWin.length)) * 100).toFixed(2),
                averageStake: (lyonParillyArrayStake / lyonParillyArray.length).toFixed(2),
                totalUds: lyonParillyArrayStake.toFixed(2),
                profitUds: lyonParillyArrayProfit.toFixed(2),
                yield: ((lyonParillyArrayProfit * 100) / lyonParillyArrayStake).toFixed(2),
                racecourse: "Lyon Parilly"
            },
            machecoulObj : {
                bets: machecoulArray.length,
                wins: machecoulArrayWin.length,
                loss: machecoulArrayLoss.length,
                void: machecoulArrayVoid.length,
                percent: ((machecoulArrayWin.length / (machecoulArrayLoss.length + machecoulArrayWin.length)) * 100).toFixed(2),
                averageStake: (machecoulArrayStake / machecoulArray.length).toFixed(2),
                totalUds: machecoulArrayStake.toFixed(2),
                profitUds: machecoulArrayProfit.toFixed(2),
                yield: ((machecoulArrayProfit * 100) / machecoulArrayStake).toFixed(2),
                racecourse: "Machecoul"
            },
            marseilleBorelyObj : {
                bets: marseilleBorelyArray.length,
                wins: marseilleBorelyArrayWin.length,
                loss: marseilleBorelyArrayLoss.length,
                void: marseilleBorelyArrayVoid.length,
                percent: ((marseilleBorelyArrayWin.length / (marseilleBorelyArrayLoss.length + marseilleBorelyArrayWin.length)) * 100).toFixed(2),
                averageStake: (marseilleBorelyArrayStake / marseilleBorelyArray.length).toFixed(2),
                totalUds: marseilleBorelyArrayStake.toFixed(2),
                profitUds: marseilleBorelyArrayProfit.toFixed(2),
                yield: ((marseilleBorelyArrayProfit * 100) / marseilleBorelyArrayStake).toFixed(2),
                racecourse: "Marseille Borely"
            },
            marseilleVivauxObj : {
                bets: marseilleVivauxArray.length,
                wins: marseilleVivauxArrayWin.length,
                loss: marseilleVivauxArrayLoss.length,
                void: marseilleVivauxArrayVoid.length,
                percent: ((marseilleVivauxArrayWin.length / (marseilleVivauxArrayLoss.length + marseilleVivauxArrayWin.length)) * 100).toFixed(2),
                averageStake: (marseilleVivauxArrayStake / marseilleVivauxArray.length).toFixed(2),
                totalUds: marseilleVivauxArrayStake.toFixed(2),
                profitUds: marseilleVivauxArrayProfit.toFixed(2),
                yield: ((marseilleVivauxArrayProfit * 100) / marseilleVivauxArrayStake).toFixed(2),
                racecourse: "Marseille Vivaux"
            },
            meydanObj : {
                bets: meydanArray.length,
                wins: meydanArrayWin.length,
                loss: meydanArrayLoss.length,
                void: meydanArrayVoid.length,
                percent: ((meydanArrayWin.length / (meydanArrayLoss.length + meydanArrayWin.length)) * 100).toFixed(2),
                averageStake: (meydanArrayStake / meydanArray.length).toFixed(2),
                totalUds: meydanArrayStake.toFixed(2),
                profitUds: meydanArrayProfit.toFixed(2),
                yield: ((meydanArrayProfit * 100) / meydanArrayStake).toFixed(2),
                racecourse: "Meydan"
            },
            montDeMarsanObj : {
                bets: montDeMarsanArray.length,
                wins: montDeMarsanArrayWin.length,
                loss: montDeMarsanArrayLoss.length,
                void: montDeMarsanArrayVoid.length,
                percent: ((montDeMarsanArrayWin.length / (montDeMarsanArrayLoss.length + montDeMarsanArrayWin.length)) * 100).toFixed(2),
                averageStake: (montDeMarsanArrayStake / montDeMarsanArray.length).toFixed(2),
                totalUds: montDeMarsanArrayStake.toFixed(2),
                profitUds: montDeMarsanArrayProfit.toFixed(2),
                yield: ((montDeMarsanArrayProfit * 100) / montDeMarsanArrayStake).toFixed(2),
                racecourse: "Mont de Marsan"
            },
            moulinsObj : {
                bets: moulinsArray.length,
                wins: moulinsArrayWin.length,
                loss: moulinsArrayLoss.length,
                void: moulinsArrayVoid.length,
                percent: ((moulinsArrayWin.length / (moulinsArrayLoss.length + moulinsArrayWin.length)) * 100).toFixed(2),
                averageStake: (moulinsArrayStake / moulinsArray.length).toFixed(2),
                totalUds: moulinsArrayStake.toFixed(2),
                profitUds: moulinsArrayProfit.toFixed(2),
                yield: ((moulinsArrayProfit * 100) / moulinsArrayStake).toFixed(2),
                racecourse: "Moulins"
            },
            nancyObj : {
                bets: nancyArray.length,
                wins: nancyArrayWin.length,
                loss: nancyArrayLoss.length,
                void: nancyArrayVoid.length,
                percent: ((nancyArrayWin.length / (nancyArrayLoss.length + nancyArrayWin.length)) * 100).toFixed(2),
                averageStake: (nancyArrayStake / nancyArray.length).toFixed(2),
                totalUds: nancyArrayStake.toFixed(2),
                profitUds: nancyArrayProfit.toFixed(2),
                yield: ((nancyArrayProfit * 100) / nancyArrayStake).toFixed(2),
                racecourse: "Nancy"
            },
            nantesObj : {
                bets: nantesArray.length,
                wins: nantesArrayWin.length,
                loss: nantesArrayLoss.length,
                void: nantesArrayVoid.length,
                percent: ((nantesArrayWin.length / (nantesArrayLoss.length + nantesArrayWin.length)) * 100).toFixed(2),
                averageStake: (nantesArrayStake / nantesArray.length).toFixed(2),
                totalUds: nantesArrayStake.toFixed(2),
                profitUds: nantesArrayProfit.toFixed(2),
                yield: ((nantesArrayProfit * 100) / nantesArrayStake).toFixed(2),
                racecourse: "Nantes"
            },
            pauObj : {
                bets: pauArray.length,
                wins: pauArrayWin.length,
                loss: pauArrayLoss.length,
                void: pauArrayVoid.length,
                percent: ((pauArrayWin.length / (pauArrayLoss.length + pauArrayWin.length)) * 100).toFixed(2),
                averageStake: (pauArrayStake / pauArray.length).toFixed(2),
                totalUds: pauArrayStake.toFixed(2),
                profitUds: pauArrayProfit.toFixed(2),
                yield: ((pauArrayProfit * 100) / pauArrayStake).toFixed(2),
                racecourse: "Pau"
            },
            pinedaObj : {
                bets: pinedaArray.length,
                wins: pinedaArrayWin.length,
                loss: pinedaArrayLoss.length,
                void: pinedaArrayVoid.length,
                percent: ((pinedaArrayWin.length / (pinedaArrayLoss.length + pinedaArrayWin.length)) * 100).toFixed(2),
                averageStake: (pinedaArrayStake / pinedaArray.length).toFixed(2),
                totalUds: pinedaArrayStake.toFixed(2),
                profitUds: pinedaArrayProfit.toFixed(2),
                yield: ((pinedaArrayProfit * 100) / pinedaArrayStake).toFixed(2),
                racecourse: "Pineda"
            },
            pornichetObj : {
                bets: pornichetArray.length,
                wins: pornichetArrayWin.length,
                loss: pornichetArrayLoss.length,
                void: pornichetArrayVoid.length,
                percent: ((pornichetArrayWin.length / (pornichetArrayLoss.length + pornichetArrayWin.length)) * 100).toFixed(2),
                averageStake: (pornichetArrayStake / pornichetArray.length).toFixed(2),
                totalUds: pornichetArrayStake.toFixed(2),
                profitUds: pornichetArrayProfit.toFixed(2),
                yield: ((pornichetArrayProfit * 100) / pornichetArrayStake).toFixed(2),
                racecourse: "Pornichet"
            },
            saintCloudObj : {
                bets: saintCloudArray.length,
                wins: saintCloudArrayWin.length,
                loss: saintCloudArrayLoss.length,
                void: saintCloudArrayVoid.length,
                percent: ((saintCloudArrayWin.length / (saintCloudArrayLoss.length + saintCloudArrayWin.length)) * 100).toFixed(2),
                averageStake: (saintCloudArrayStake / saintCloudArray.length).toFixed(2),
                totalUds: saintCloudArrayStake.toFixed(2),
                profitUds: saintCloudArrayProfit.toFixed(2),
                yield: ((saintCloudArrayProfit * 100) / saintCloudArrayStake).toFixed(2),
                racecourse: "Saint Cloud"
            },
            saintMaloObj : {
                bets: saintMaloArray.length,
                wins: saintMaloArrayWin.length,
                loss: saintMaloArrayLoss.length,
                void: saintMaloArrayVoid.length,
                percent: ((saintMaloArrayWin.length / (saintMaloArrayLoss.length + saintMaloArrayWin.length)) * 100).toFixed(2),
                averageStake: (saintMaloArrayStake / saintMaloArray.length).toFixed(2),
                totalUds: saintMaloArrayStake.toFixed(2),
                profitUds: saintMaloArrayProfit.toFixed(2),
                yield: ((saintMaloArrayProfit * 100) / saintMaloArrayStake).toFixed(2),
                racecourse: "Saint Malo"
            },
            salonDeProvenceObj : {
                bets: salonDeProvenceArray.length,
                wins: salonDeProvenceArrayWin.length,
                loss: salonDeProvenceArrayLoss.length,
                void: salonDeProvenceArrayVoid.length,
                percent: ((salonDeProvenceArrayWin.length / (salonDeProvenceArrayLoss.length + salonDeProvenceArrayWin.length)) * 100).toFixed(2),
                averageStake: (salonDeProvenceArrayStake / salonDeProvenceArray.length).toFixed(2),
                totalUds: salonDeProvenceArrayStake.toFixed(2),
                profitUds: salonDeProvenceArrayProfit.toFixed(2),
                yield: ((salonDeProvenceArrayProfit * 100) / salonDeProvenceArrayStake).toFixed(2),
                racecourse: "Salon De Provence"
            },
            sanSebastianObj : {
                bets: sanSebastianArray.length,
                wins: sanSebastianArrayWin.length,
                loss: sanSebastianArrayLoss.length,
                void: sanSebastianArrayVoid.length,
                percent: ((sanSebastianArrayWin.length / (sanSebastianArrayLoss.length + sanSebastianArrayWin.length)) * 100).toFixed(2),
                averageStake: (sanSebastianArrayStake / sanSebastianArray.length).toFixed(2),
                totalUds: sanSebastianArrayStake.toFixed(2),
                profitUds: sanSebastianArrayProfit.toFixed(2),
                yield: ((sanSebastianArrayProfit * 100) / sanSebastianArrayStake).toFixed(2),
                racecourse: "San Sebastián"
            },
            sanlucarObj : {
                bets: sanlucarArray.length,
                wins: sanlucarArrayWin.length,
                loss: sanlucarArrayLoss.length,
                void: sanlucarArrayVoid.length,
                percent: ((sanlucarArrayWin.length / (sanlucarArrayLoss.length + sanlucarArrayWin.length)) * 100).toFixed(2),
                averageStake: (sanlucarArrayStake / sanlucarArray.length).toFixed(2),
                totalUds: sanlucarArrayStake.toFixed(2),
                profitUds: sanlucarArrayProfit.toFixed(2),
                yield: ((sanlucarArrayProfit * 100) / sanlucarArrayStake).toFixed(2),
                racecourse: "Sanlucar"
            },
            senonnesPouanceObj : {
                bets: senonnesPouanceArray.length,
                wins: senonnesPouanceArrayWin.length,
                loss: senonnesPouanceArrayLoss.length,
                void: senonnesPouanceArrayVoid.length,
                percent: ((senonnesPouanceArrayWin.length / (senonnesPouanceArrayLoss.length + senonnesPouanceArrayWin.length)) * 100).toFixed(2),
                averageStake: (senonnesPouanceArrayStake / senonnesPouanceArray.length).toFixed(2),
                totalUds: senonnesPouanceArrayStake.toFixed(2),
                profitUds: senonnesPouanceArrayProfit.toFixed(2),
                yield: ((senonnesPouanceArrayProfit * 100) / senonnesPouanceArrayStake).toFixed(2),
                racecourse: "Senonnes-Pouance"
            },
            strasbourgObj : {
                bets: strasbourgArray.length,
                wins: strasbourgArrayWin.length,
                loss: strasbourgArrayLoss.length,
                void: strasbourgArrayVoid.length,
                percent: ((strasbourgArrayWin.length / (strasbourgArrayLoss.length + strasbourgArrayWin.length)) * 100).toFixed(2),
                averageStake: (strasbourgArrayStake / strasbourgArray.length).toFixed(2),
                totalUds: strasbourgArrayStake.toFixed(2),
                profitUds: strasbourgArrayProfit.toFixed(2),
                yield: ((strasbourgArrayProfit * 100) / strasbourgArrayStake).toFixed(2),
                racecourse: "Strasbourg"
            },
            tarbesObj : {
                bets: tarbesArray.length,
                wins: tarbesArrayWin.length,
                loss: tarbesArrayLoss.length,
                void: tarbesArrayVoid.length,
                percent: ((tarbesArrayWin.length / (tarbesArrayLoss.length + tarbesArrayWin.length)) * 100).toFixed(2),
                averageStake: (tarbesArrayStake / tarbesArray.length).toFixed(2),
                totalUds: tarbesArrayStake.toFixed(2),
                profitUds: tarbesArrayProfit.toFixed(2),
                yield: ((tarbesArrayProfit * 100) / tarbesArrayStake).toFixed(2),
                racecourse: "Tarbes"
            },
            toulouseObj : {
                bets: toulouseArray.length,
                wins: toulouseArrayWin.length,
                loss: toulouseArrayLoss.length,
                void: toulouseArrayVoid.length,
                percent: ((toulouseArrayWin.length / (toulouseArrayLoss.length + toulouseArrayWin.length)) * 100).toFixed(2),
                averageStake: (toulouseArrayStake / toulouseArray.length).toFixed(2),
                totalUds: toulouseArrayStake.toFixed(2),
                profitUds: toulouseArrayProfit.toFixed(2),
                yield: ((toulouseArrayProfit * 100) / toulouseArrayStake).toFixed(2),
                racecourse: "Toulouse"
            },
            vichyObj : {
                bets: vichyArray.length,
                wins: vichyArrayWin.length,
                loss: vichyArrayLoss.length,
                void: vichyArrayVoid.length,
                percent: ((vichyArrayWin.length / (vichyArrayLoss.length + vichyArrayWin.length)) * 100).toFixed(2),
                averageStake: (vichyArrayStake / vichyArray.length).toFixed(2),
                totalUds: vichyArrayStake.toFixed(2),
                profitUds: vichyArrayProfit.toFixed(2),
                yield: ((vichyArrayProfit * 100) / vichyArrayStake).toFixed(2),
                racecourse: "Vichy"
            },
            vittelObj : {
                bets: vittelArray.length,
                wins: vittelArrayWin.length,
                loss: vittelArrayLoss.length,
                void: vittelArrayVoid.length,
                percent: ((vittelArrayWin.length / (vittelArrayLoss.length + vittelArrayWin.length)) * 100).toFixed(2),
                averageStake: (vittelArrayStake / vittelArray.length).toFixed(2),
                totalUds: vittelArrayStake.toFixed(2),
                profitUds: vittelArrayProfit.toFixed(2),
                yield: ((vittelArrayProfit * 100) / vittelArrayStake).toFixed(2),
                racecourse: "Vittel"
            },
            zarzuelaObj : {
                bets: zarzuelaArray.length,
                wins: zarzuelaArrayWin.length,
                loss: zarzuelaArrayLoss.length,
                void: zarzuelaArrayVoid.length,
                percent: ((zarzuelaArrayWin.length / (zarzuelaArrayLoss.length + zarzuelaArrayWin.length)) * 100).toFixed(2),
                averageStake: (zarzuelaArrayStake / zarzuelaArray.length).toFixed(2),
                totalUds: zarzuelaArrayStake.toFixed(2),
                profitUds: zarzuelaArrayProfit.toFixed(2),
                yield: ((zarzuelaArrayProfit * 100) / zarzuelaArrayStake).toFixed(2),
                racecourse: "Zarzuela"
            },
        })

    }
    
    return (
        <>
            <h2 className = "stats-title" id= "title">Stats {props.statYear} por Hipódromo</h2>
            <div className = "table-stats-container">
            <Table striped bordered hover variant="dark" size = "sm" className = "table" responsive = "md">    
                <thead>
                    <tr>
                    <th>Hipódromo</th>
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
                {racecoursesArray.map((item => (
                <tbody key = {item.racecourse}>
                    <tr>
                        <td>{item.racecourse}</td>
                        <td>{item.bets}</td>
                        <td>{item.wins}</td>
                        <td>{item.loss}</td>
                        <td>{item.void}</td>
                        <td>{item.percent !== "NaN" ? `${item.percent}%` : "Sin datos"}</td>
                        <td>{item.averageStake === "NaN" ? "Sin Datos" : item.averageStake}</td>
                        <td>{item.totalUds}</td>
                        <td className = {item.yield >= 0 ? "stats-green" : item.yield < 0 ? "stats-red" : ""}>{item.yield !== "NaN" ? `${item.yield}%` : "Sin datos"}</td>
                        <td className = {item.profitUds >= 0 ? "stats-green" : "stats-red"}>{item.profitUds}</td>
                    </tr>
                </tbody>
                )))}
            </Table>
            </div>
        </>
    );
}
 
export default StatsRaceCourses;