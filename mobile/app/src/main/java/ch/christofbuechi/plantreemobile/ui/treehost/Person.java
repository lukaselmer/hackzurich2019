package ch.christofbuechi.plantreemobile.ui.treehost;

import android.content.Context;
import java.util.ArrayList;
import java.util.List;

import ch.christofbuechi.plantreemobile.R;

public class Person {

    public final String name;
    public final String age;
    public final int photoId;

    Person(String name, String age, int photoId) {
        this.name = name;
        this.age = age;
        this.photoId = photoId;
    }

    // This method creates an ArrayList that has three Person objects
// Checkout the project associated with this tutorial on Github if
// you want to use the same images.
    public static List<Person> initializeData(Context context){
        List<Person> persons = new ArrayList<>();
        persons.add(new Person("Heidi Treehost", "55 years old", R.drawable.ic_person_black_24dp));
        persons.add(new Person("Emma Wilson", "23 years old", R.drawable.ic_person_black_24dp));
        persons.add(new Person("Company Evironmental", "-", R.drawable.ic_business_black_24dp));
        return persons;
    }
}
