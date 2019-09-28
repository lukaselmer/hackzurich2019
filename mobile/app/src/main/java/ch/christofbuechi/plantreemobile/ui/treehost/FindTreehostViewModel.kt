package ch.christofbuechi.plantreemobile.ui.treehost

import androidx.lifecycle.LiveData
import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.ViewModel

class FindTreehostViewModel : ViewModel() {

    private val _text = MutableLiveData<String>().apply {
        value = "Die folgenden Leute bieten einen Ort in deiner Nähe"
    }
    val text: LiveData<String> = _text
}