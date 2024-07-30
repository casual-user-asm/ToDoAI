export default function Home() {
    return (
        <div className="container text-center">
            <div className="row">
                <div className="col-sm-3">Level 1: .col-sm-3</div>
                <div className="col-sm-9">
                    <div className="row">
                        <div className="col-8 col-sm-6">
                            Level 2: .col-8 .col-sm-6
                        </div>
                        <div className="col-4 col-sm-6">
                            Level 2: .col-4 .col-sm-6
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
