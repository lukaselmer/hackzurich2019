package ch.christofbuechi.plantreemobile.ui.upcomingplantings;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import java.util.List;

import ch.christofbuechi.plantreemobile.R;

public class UpcomingPlantingsAdapter extends RecyclerView.Adapter<UpcomingPlantingsAdapter.PlantingViewHolder> {

    private List<Planting> plantingList;

    public UpcomingPlantingsAdapter(List<Planting> plantingList) {
        this.plantingList = plantingList;
    }

    @NonNull
    @Override
    public PlantingViewHolder onCreateViewHolder(@NonNull ViewGroup viewGroup, int viewType) {
        View v = LayoutInflater.from(viewGroup.getContext()).inflate(R.layout.list_item_upcomingplantings, viewGroup, false);
        PlantingViewHolder pvh = new PlantingViewHolder(v);
        return pvh;
    }

    @Override
    public void onBindViewHolder(@NonNull PlantingViewHolder holder, final int position) {
        holder.location.setText(plantingList.get(position).location);
        holder.freeSpots.setText(String.valueOf(plantingList.get(position).freeSpots));
        holder.time.setText(plantingList.get(position).time.toString());
        holder.duration.setText(plantingList.get(position).duration);

        holder.itemView.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
            }
        });
    }

    @Override
    public int getItemCount() {
        return plantingList.size();
    }

    public static class PlantingViewHolder extends RecyclerView.ViewHolder {
        final View iView;

        TextView location;
        TextView freeSpots;
        TextView time;
        TextView duration;

        PlantingViewHolder(View itemView) {
            super(itemView);
            iView = itemView;
            location = (TextView) itemView.findViewById(R.id.location);
            freeSpots = (TextView) itemView.findViewById(R.id.freespots);
            time = (TextView) itemView.findViewById(R.id.time);
            duration = (TextView) itemView.findViewById(R.id.duration);
        }


    }
}
