import React from 'react';
import { Container } from 'reactstrap';
import CardView from './CardView';
import ActivityView from './ActivityView';

// import Components
import BreadCrumb from '../../Components/Common/BreadCrumb';

const ERPDashboard = () => {


    document.title="Infinit X | ERP";
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Security Gate" pageTitle="Infinit X" />
                        <CardView />
                        <ActivityView />
                </Container>
            </div>
        </React.Fragment>
    );
};

export default ERPDashboard;