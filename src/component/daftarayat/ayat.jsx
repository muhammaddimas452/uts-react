import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Ayat = props => {
    const [data, setData] = useState([]);

    const id = props.match.params.id
    console.log(id)
    useEffect(() => {
        axios.get("https://al-quran-8d642.firebaseio.com/surat/" + id + ".json?print=pretty").then(res => {
            setData()
        })
    })
    return (
        <div>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4"></h1>
                </div>
            </div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-10 info-panel">
                        <div className="row justify-content-center">
                            {
                                data/length > 0 ?
                                data.map(param => {
                                    return(
                                    <div className="col-md-10 col-sm-10 mb-5 pb-4" key={param.nomor}>
                                            <h2 className="float-right">
                                                {param.ar}
                                            </h2>
                                            <br/>
                                            <h5>
                                                {param.nomor}.{param.id}
                                            </h5>
                                    </div>
                                    )
                                })
                                :
                                <div className="col-md-12 col-sm12">
                                        <div className="col-md-12 col-sm-12">
                                    <div class="spinner-border text-primary" role="status">
                                        <span class="sr-only">Loading.....</span>
                                    </div>
                                </div>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
            </div>
    )
}

export default Ayat;
