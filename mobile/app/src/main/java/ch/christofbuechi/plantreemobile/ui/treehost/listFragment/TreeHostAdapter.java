package ch.christofbuechi.plantreemobile.ui.treehost.listFragment;

import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.navigation.Navigation;
import androidx.recyclerview.widget.RecyclerView;

import java.util.List;

import ch.christofbuechi.plantreemobile.R;
import ch.christofbuechi.plantreemobile.ui.treehost.Person;

public class TreeHostAdapter extends RecyclerView.Adapter<TreeHostAdapter.PersonViewHolder> {

    private List<Person> persons;

    public TreeHostAdapter(List<Person> persons) {
        this.persons = persons;
    }

    @NonNull
    @Override
    public PersonViewHolder onCreateViewHolder(@NonNull ViewGroup viewGroup, int viewType) {
        View v = LayoutInflater.from(viewGroup.getContext()).inflate(R.layout.list_item_plant, viewGroup, false);
        PersonViewHolder pvh = new PersonViewHolder(v);
        return pvh;
    }

    @Override
    public void onBindViewHolder(@NonNull PersonViewHolder holder, final int position) {
        final Person person = persons.get(position);
        holder.personName.setText(person.name);
        holder.personAge.setText(person.age);
        holder.personPhoto.setImageResource(person.drawable);
        holder.personSpots.setText(String.format("Free spots: %d", person.freespots));



        holder.itemView.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                Bundle bundle = new Bundle();
                bundle.putString("name", person.name);
                bundle.putString("age", person.age);
                bundle.putString("location", person.location);
                bundle.putFloat("lng", (float) person.asLatLng().longitude);
                bundle.putFloat("lat", (float) person.asLatLng().latitude);
                bundle.putInt("freespots", person.freespots);

                Navigation.findNavController(v).navigate(R.id.nav_findtreehost_detail, bundle);

            }
        });
    }

    @Override
    public int getItemCount() {
        return persons.size();
    }


    public static class PersonViewHolder extends RecyclerView.ViewHolder {
        final View iView;
        TextView personSpots;
        TextView personName;
        TextView personAge;
        ImageView personPhoto;

        PersonViewHolder(View itemView) {
            super(itemView);
            iView = itemView;
            personName = (TextView) itemView.findViewById(R.id.person_name);
            personAge = (TextView) itemView.findViewById(R.id.person_age);
            personPhoto = (ImageView) itemView.findViewById(R.id.person_photo);
            personSpots = (TextView) itemView.findViewById(R.id.person_spots);
        }


    }
}
