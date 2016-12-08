/**
 * Created by ybenchim on 07/12/2016.
 */
import {Profile} from "./profile";
export class ProfileService {
  private profiles : Profile[] = [
      new Profile ('Par défaut', ['Montpellier', 'Lyon', 'Paris'])
  ];
  saveNewProfile(cities: string[]){
    const profileName = 'Profil ' + this.profiles.length;
    const profile = new Profile(profileName, cities);
    this.profiles.push(profile);
  }
  deleteProfile(profile: Profile) {
    this.profiles.splice(this.profiles.indexOf(profile), 1);
  }
  getProfiles(){
    return this.profiles;
  }
}
