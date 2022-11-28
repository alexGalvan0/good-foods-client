
function Nav() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col d-flex justify-content-around">
                    <button type="button" className="btn btn-lg btn-primary" data-toggle="tooltip" data-placement="top" title="Tooltip on top">
                        Tooltip on top
                    </button>
                    <button type="button" className="btn btn-lg btn-primary" data-toggle="tooltip" data-placement="right" title="Tooltip on right">
                        Tooltip on right
                    </button>
                    <button type="button" className="btn btn-lg btn-primary" data-toggle="tooltip" data-placement="bottom" title="Tooltip on bottom">
                        Tooltip on bottom
                    </button>
                    <button type="button" className="btn btn-lg btn-primary" data-toggle="tooltip" data-placement="left" title="Tooltip on left">
                        Tooltip on left
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Nav;