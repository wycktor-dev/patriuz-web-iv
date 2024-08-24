import React from 'react';
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonButton, IonImg } from '@ionic/react';
import Menu from '../Menu';
import ContentBg from '../components/ContentBg';

const Home: React.FC = () => {
  return (
    <>
      <Menu></Menu>
      <IonPage id="main-content">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton color="primary"></IonMenuButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>

        <ContentBg className="ion-padding" src={'assets/image.jpg'}>
          <IonGrid>
            <IonRow>
              <IonCol size-md="6" offset-md="3">
                <IonCard>
                  <IonImg src="assets/image.jpg" alt="Image" />
                  <IonCardHeader>
                    <IonCardTitle>Unleash Your Potential</IonCardTitle>
                    <IonCardSubtitle>Discover our amazing features</IonCardSubtitle>
                  </IonCardHeader>
                  <IonCardContent>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
                      risus in augue luctus venenatis.
                    </p>
                    <IonButton routerLink="/features" expand="block">
                      Explore Features
                    </IonButton>
                  </IonCardContent>
                </IonCard>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol size-md="6" offset-md="3">
                <IonCard>
                  <IonImg src="" alt="Image" />
                  <IonCardHeader>
                    <IonCardTitle>Unleash Your Potential</IonCardTitle>
                    <IonCardSubtitle>Discover our amazing features</IonCardSubtitle>
                  </IonCardHeader>
                  <IonCardContent>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
                      risus in augue luctus venenatis.
                    </p>
                    <IonButton routerLink="/features" expand="block">
                      Explore Features
                    </IonButton>
                  </IonCardContent>
                </IonCard>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol size-md="6" offset-md="3">
                <IonCard>
                  <IonCardHeader>
                    <IonCardTitle>Why Choose Us?</IonCardTitle>
                    <IonCardSubtitle>Learn more about our advantages</IonCardSubtitle>
                  </IonCardHeader>
                  <IonCardContent>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                      accusantium doloremque laudantium, totam rem aperiam.
                    </p>
                    <IonGrid>
                      <IonRow>
                        <IonCol size="6">
                          <IonCard>
                            <IonCardHeader>
                              <IonCardTitle>Reliable</IonCardTitle>
                            </IonCardHeader>
                            <IonCardContent>
                              <p>
                                Our app is built with reliability in mind, ensuring a
                                seamless experience.
                              </p>
                            </IonCardContent>
                          </IonCard>
                        </IonCol>
                        <IonCol size="6">
                          <IonCard>
                            <IonCardHeader>
                              <IonCardTitle>User-Friendly</IonCardTitle>
                            </IonCardHeader>
                            <IonCardContent>
                              <p>
                                Intuitive interface and easy-to-use features make our
                                app a breeze to navigate.
                              </p>
                            </IonCardContent>
                          </IonCard>
                        </IonCol>
                      </IonRow>
                    </IonGrid>
                    <IonButton routerLink="/about" color="primary" expand="block">
                      About Us
                    </IonButton>
                  </IonCardContent>
                </IonCard>
              </IonCol>
            </IonRow>
          </IonGrid>
        </ContentBg>
      </IonPage>
    </>
  );
}
export default Home;