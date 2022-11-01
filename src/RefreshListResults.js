import React, { useEffect, useState } from "react";
import {Link, useNavigate} from 'react-router-dom'



function RefreshListResults(){

    let rfr = useNavigate()

    useEffect(() => {
        rfr('/results')},[])



}

export default RefreshListResults;