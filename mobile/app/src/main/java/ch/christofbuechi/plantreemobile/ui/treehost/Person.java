package ch.christofbuechi.plantreemobile.ui.treehost;

import com.google.android.libraries.maps.model.LatLng;

import java.util.ArrayList;
import java.util.List;

import ch.christofbuechi.plantreemobile.R;

public class Person {

    public final String name;
    public final String age;
    public String location;
    public int freespots;
    private LatLng latLng;
    public final int drawable;

    Person(String name, String age, String location, int freespots, LatLng latLng, int drawable) {
        this.name = name;
        this.age = age;
        this.location = location;
        this.freespots = freespots;
        this.latLng = latLng;
        this.drawable = drawable;
    }

    // This method creates an ArrayList that has three Person objects
// Checkout the project associated with this tutorial on Github if
// you want to use the same images.
    public static List<Person> initializeData(){
        List<Person> persons = new ArrayList<>();
        persons.add(new Person("Heidi Treehost", "55 years old", "Zürich", 7, new LatLng(47.400257, 8.474603), R.drawable.ic_person_black_24dp));
        persons.add(new Person("Emma Wilson", "34 years old", "Oerlikon", 5, new LatLng(47.410191, 8.554486), R.drawable.ic_person_black_24dp));
        persons.add(new Person("Company Evironmental", "", "Seebach", 10, new LatLng(47.416950, 8.552382), R.drawable.ic_business_black_24dp));
        return persons;
    }

    public LatLng asLatLng() {
        return latLng;
    }

    public String getTextForMarker() {
        return name + "-" + age;
    }
}
