import React from 'react';

let Popularity=function(){
    return(
        <div className="Popularity">
            <img src={require('d/img/hotstore.png')} alt="图片"/>
            <ul>
                <li>
                    <div className="storeIndex">
                        1
                    </div>
                    <div className="hotStoreMsg">
                        <div className="left">
                            <h3>
                                ELF World精...
                            </h3>
                            <p>
                            主营：棉纺面料、混纺面料、...
                            </p>
                        </div>
                        <div className="right">
                            <span>
                                人气值:6208
                            </span>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="storeIndex">
                        1
                    </div>
                    <div className="hotStoreMsg">
                        <div className="left">
                            <h3>
                                ELF World精...
                            </h3>
                            <p>
                            主营：棉纺面料、混纺面料、...
                            </p>
                        </div>
                        <div className="right">
                            <span>
                                人气值:6208
                            </span>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Popularity;