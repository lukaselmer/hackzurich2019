package ch.christofbuechi.plantreemobile.ui.treehost

import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.TextView
import androidx.fragment.app.Fragment
import androidx.lifecycle.Observer
import androidx.lifecycle.ViewModelProviders
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView
import ch.christofbuechi.plantreemobile.R


class FindTreehostFragment : Fragment() {

    private lateinit var findTreehostViewModel: FindTreehostViewModel

    private lateinit var recyclerView: RecyclerView
    private lateinit var viewAdapter: TreeHostAdapter
    private lateinit var viewManager: RecyclerView.LayoutManager

    override fun onCreateView(
        inflater: LayoutInflater,
        container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {


        findTreehostViewModel =
            ViewModelProviders.of(this).get(FindTreehostViewModel::class.java)
        val root = inflater.inflate(R.layout.fragment_find_treehost, container, false)


        val textView: TextView = root.findViewById(R.id.text_findtreehost_title)
        findTreehostViewModel.text.observe(this, Observer {
            textView.text = it
        })

        viewManager = LinearLayoutManager(context)

        var persons = Person.initializeData(context)
        viewAdapter = TreeHostAdapter(persons)

        recyclerView = root.findViewById<RecyclerView>(R.id.my_recycler_view).apply {
            // use this setting to improve performance if you know that changes
            // in content do not change the layout size of the RecyclerView
            setHasFixedSize(true)

            // use a linear layout manager
            layoutManager = viewManager

            // specify an viewAdapter (see also next example)
            adapter = viewAdapter

            return root
        }
    }
}
