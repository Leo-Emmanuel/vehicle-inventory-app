import React from 'react'

const View = () => {
    return (
        <div className="container mt-3">
            <h3 className="mb-3 text-center">Vehicle List</h3>
            <div className="table-responsive">
                <table className="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th className="table-primary">VEHICLE NAME</th>
                            <th className="table-primary">BRAND</th>
                            <th className="table-primary">FUEL TYPE</th>
                            <th className="table-primary">REGISTRATION NUMBER</th>
                            <th className="table-primary">MANUFACTURING DATE</th>
                            <th className="table-primary">PRICE</th>
                            <th className="table-primary">IMAGE</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="table-primary">Swift</td>
                            <td className="table-secondary">Maruti</td>
                            <td className="table-success">Petrol</td>
                            <td className="table-danger">KL01AB1234</td>
                            <td className="table-warning">2021-05-12</td>
                            <td className="table-info">₹700000</td>
                            <td className="table-light">
                                <img src="https://imgd.aeplcdn.com/664x374/n/cw/ec/159099/swift-exterior-right-front-three-quarter-31.jpeg?isig=0&q=80" alt="vehicle" />
                            </td>
                        </tr>
                        <tr>
                            <td className="table-primary">Swift</td>
                            <td className="table-secondary">Maruti</td>
                            <td className="table-success">Petrol</td>
                            <td className="table-danger">KL01AB1234</td>
                            <td className="table-warning">2021-05-12</td>
                            <td className="table-info">₹700000</td>
                            <td className="table-light">
                                <img src="https://imgd.aeplcdn.com/664x374/n/cw/ec/159099/swift-exterior-right-front-three-quarter-31.jpeg?isig=0&q=80" alt="Swift" />
                            </td>
                        </tr>
                        <tr>
                            <td className="table-primary">i20</td>
                            <td className="table-secondary">Hyundai</td>
                            <td className="table-success">Diesel</td>
                            <td className="table-danger">TN10XY5678</td>
                            <td className="table-warning">2020-08-21</td>
                            <td className="table-info">₹850000</td>
                            <td className="table-light">
                                <img src="https://imgd.aeplcdn.com/1920x1080/n/cw/ec/150603/i20-exterior-right-front-three-quarter-7.jpeg?isig=0&q=80&q=80" style={{ width: '664px', height: '374px', objectFit: 'cover', borderRadius: '4px' }} alt="i20" />
                            </td>
                        </tr>
                        <tr>
                            <td className="table-primary">Fortuner</td>
                            <td className="table-secondary">Toyota</td>
                            <td className="table-success">Diesel</td>
                            <td className="table-danger">MH20ZZ9999</td>
                            <td className="table-warning">2019-03-10</td>
                            <td className="table-info">₹3000000</td>
                            <td className="table-light">
                                <img src="https://imgd.aeplcdn.com/1280x720/n/cw/ec/44709/fortuner-exterior-right-front-three-quarter-20.jpeg?isig=0&q=80" style={{ width: '664px', height: '374px', objectFit: 'cover', borderRadius: '4px' }} alt="Fortuner" />
                            </td>
                        </tr>
                        <tr>
                            <td className="table-primary">Tiago</td>
                            <td className="table-secondary">Tata</td>
                            <td className="table-success">Petrol</td>
                            <td className="table-danger">KA05MN4567</td>
                            <td className="table-warning">2022-01-15</td>
                            <td className="table-info">₹550000</td>
                            <td className="table-light">
                                <img src="https://stimg.cardekho.com/images/carexteriorimages/930x620/Tata/Tiago/10655/1744284802118/front-left-side-47.jpg" style={{ width: '664px', height: '374px', objectFit: 'cover', borderRadius: '4px' }} alt="Tiago" />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default View