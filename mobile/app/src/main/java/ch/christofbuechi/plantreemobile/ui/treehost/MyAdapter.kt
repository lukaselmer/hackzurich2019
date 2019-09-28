package ch.christofbuechi.plantreemobile.ui.treehost

import android.view.LayoutInflater
import android.view.ViewGroup
import android.widget.TextView
import androidx.recyclerview.widget.RecyclerView
import ch.christofbuechi.plantreemobile.R

class MyAdapter() :
    RecyclerView.Adapter<MyAdapter.ViewHolder>() {

    // Replace the contents of a view (invoked by the layout manager)
    override fun onBindViewHolder(holder: ViewHolder, position: Int) {
        // - get element from your dataset at this position
        // - replace the contents of the view with that element
//        holder.textView.text = myDataset[position]
        holder.textView.text = "Heidi Treehost"
    }


    // Create new views (invoked by the layout manager)
    override fun onCreateViewHolder(parent: ViewGroup,
                                    viewType: Int): MyAdapter.ViewHolder {
        // create a new view
        val textView = LayoutInflater.from(parent.context).inflate(R.layout.list_item_plant, parent, false) as TextView
        // set the view's size, margins, paddings and layout parameters
//        ...
        return ViewHolder(textView)
    }

    // Return the size of your dataset (invoked by the layout manager)
//    override fun getItemCount() = myDataset.size
    override fun getItemCount() = 1

    // Provide a reference to the views for each data item
    // Complex data items may need more than one view per item, and
    // you provide access to all the views for a data item in a view holder.
    // Each data item is just a string in this case that is shown in a TextView.
    class ViewHolder(val textView: TextView) : RecyclerView.ViewHolder(textView)
}