package ch.christofbuechi.plantreemobile.ui.upcomingplantings;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import com.bumptech.glide.Glide;

import java.text.SimpleDateFormat;
import java.util.List;

import ch.christofbuechi.plantreemobile.R;

public class UpcomingPlantingsAdapter extends RecyclerView.Adapter<UpcomingPlantingsAdapter.PlantingViewHolder> {

    private List<Planting> plantingList;

    SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd HH:mm");

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
        holder.location.setText("Location:\n" + plantingList.get(position).location);
        holder.freeSpots.setText(String.format("Free Spots to plant:%d", plantingList.get(position).freeSpots));
        holder.time.setText("StartTime: " + format.format(plantingList.get(position).time));
        holder.duration.setText("Duration: " + plantingList.get(position).duration);
        for (Integer i = 0; i < plantingList.get(position).freeSpots && i < 15; i++) {
            ImageView imageView = new ImageView(holder.itemView.getContext());
            imageView.setLayoutParams(new LinearLayout.LayoutParams(50, 50));
            Glide.with(holder.itemView).load(R.mipmap.ic_launcher).into(imageView);
            holder.treeList.addView(imageView);
        }

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
        LinearLayout treeList;

        PlantingViewHolder(View itemView) {
            super(itemView);
            iView = itemView;
            location = (TextView) itemView.findViewById(R.id.location);
            freeSpots = (TextView) itemView.findViewById(R.id.freespots);
            time = (TextView) itemView.findViewById(R.id.time);
            duration = (TextView) itemView.findViewById(R.id.duration);
            treeList = (LinearLayout) itemView.findViewById(R.id.tree_list);
        }


    }
}
