import React from 'react';
import { IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonMenu, IonMenuToggle, IonTitle, IonToolbar } from '@ionic/react';
import { homeOutline, informationCircleOutline, mailOutline } from 'ionicons/icons';
import { useHistory } from 'react-router-dom';

const Menu: React.FC = () => {
    const history = useHistory();

    const handleNavigation = (path: string) => {
        history.push(path);
    };
    return (
        <>
        <IonMenu contentId="main-content">
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Menu</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonMenuToggle auto-hide="false">
                    <IonItem button onClick={() => handleNavigation('/Home')}>
                        <IonIcon color="primary" slot="start" icon={homeOutline}></IonIcon>
                        <IonLabel>Home</IonLabel>
                    </IonItem>
                </IonMenuToggle>
                <IonMenuToggle auto-hide="false">
                    <IonItem button onClick={() => handleNavigation('/Tab2')}>
                        <IonIcon color="primary" slot="start" icon={informationCircleOutline}></IonIcon>
                        <IonLabel>Sobre</IonLabel>
                    </IonItem>
                </IonMenuToggle>
                <IonMenuToggle auto-hide="false">
                    <IonItem button onClick={() => handleNavigation('/Tab3')}>
                        <IonIcon color="primary" slot="start" icon={mailOutline}></IonIcon>
                        <IonLabel>Contato</IonLabel>
                    </IonItem>
                </IonMenuToggle>
            </IonContent>
        </IonMenu>
        </>
    );
}
export default Menu;