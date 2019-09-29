package ch.christofbuechi.plantreemobile.ui.treehost;

import com.google.android.libraries.maps.model.LatLng;

import java.util.ArrayList;
import java.util.List;

import ch.christofbuechi.plantreemobile.R;

public class Person {

    public final String name;
    public final String age;
    public String location;
    private LatLng latLng;
    public final int photoId;

    Person(String name, String age, String location, LatLng latLng, int photoId) {
        this.name = name;
        this.age = age;
        this.location = location;
        this.latLng = latLng;
        this.photoId = photoId;
    }

    // This method creates an ArrayList that has three Person objects
// Checkout the project associated with this tutorial on Github if
// you want to use the same images.
    public static List<Person> initializeData(){
        List<Person> persons = new ArrayList<>();
        persons.add(new Person("Heidi Treehost", "55 years old", "Technopark", new LatLng(47.389642, 8.516050), R.drawable.ic_person_black_24dp));
        persons.add(new Person("Emma Wilson", "23 years old", "Technopark", new LatLng(47.389642, 8.516050), R.drawable.ic_person_black_24dp));
        persons.add(new Person("Company Evironmental", "-", "Technopark", new LatLng(47.389642, 8.516050), R.drawable.ic_business_black_24dp));
        return persons;
    }

    public LatLng asLatLng() {
        return latLng;
    }

    public String getTextForMarker() {
        return name + "-" + age;
    }
}
